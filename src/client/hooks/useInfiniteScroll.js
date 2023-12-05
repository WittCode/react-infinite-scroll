import {useState, useRef, useCallback, useEffect} from 'react';

export default function useInfiniteScroll() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const spinnerRef = useRef(null);

  const fetchData = useCallback(() => {
    setIsLoading(true);

    fetch(`http://localhost:1234/api/blogs?index=${index}`)
      .then(resp => resp.json())
      .then(data => {
        if (data?.length !== 0) {
          setData((prevItems) => [...prevItems, ...data]);
          setIndex((prevIndex) => prevIndex + 1);
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setIsLoading(false);
      });

  }, [isLoading, index]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const spinner = entries[0];
      if (spinner.isIntersecting && !isLoading) {
        fetchData();
      }
    });

    // Observe the spinner element
    if (spinnerRef.current) {
      observer.observe(spinnerRef.current);
    }

    // When we unmount, no longer observe the loader
    return () => {
      if (spinnerRef.current) {
        observer.unobserve(spinnerRef.current);
      }
    };
  }, [fetchData]);

  return {data, isLoading, spinnerRef};
}