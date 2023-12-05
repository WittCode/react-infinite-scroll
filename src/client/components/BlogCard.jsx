import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BlogCard(props) {
  const {blog} = props;
  return (
    <Card sx={{width: 300, padding: 3, mb: 1, mt: 1, backgroundColor: '#616161'}}>
      <CardContent>
        <Typography variant='h5' gutterBottom>
          {blog.title}
        </Typography>
        <Typography sx={{mb: 1.5}} color="text.secondary">
          Description
        </Typography>
        <Typography variant="body2">
          {blog.description}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained'>Read</Button>
      </CardActions>
    </Card>
  );
}