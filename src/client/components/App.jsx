import Stack from '@mui/material/Stack';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import BlogCard from './BlogCard';
import Spinner from './Spinner';

const App = () => {
  const {data, isLoading, spinnerRef} = useInfiniteScroll();

  return (
    <Stack>
      {data.map((item, i) => (
        <BlogCard blog={item} key={i}/>
      ))}
      {/* Div that is observed by the observer API. When in view more data is fetched  */}
      <div ref={spinnerRef}>{isLoading ? <Spinner /> : null}</div>
    </Stack>
  );
};

export default App;