import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.cjs';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();
const PORT = 1234;

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler, {}));

const blogs = [
  {title: 'Blog Index 1', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 2', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 3', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 4', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 5', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 6', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 7', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 8', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 9', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 10', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 11', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 12', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 13', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 14', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 15', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 16', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 17', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 18', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 19', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 20', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 21', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 22', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 23', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 24', description: 'This is a really interesting blog. You will learn a ton.', image: ''},
  {title: 'Blog Index 25', description: 'This is a really interesting blog. You will learn a ton.', image: ''}
];

const INCREMENT = 5;

app.get('/api/blogs', async (req, res) => {
  // Get the desired blogs
  const {index} = req.query;
  const rangeMin = index * INCREMENT;
  const rangeMax = rangeMin + INCREMENT;
  const blogsToReturn = blogs.filter((blog, i) => (i >= rangeMin && i < rangeMax));
  // Wait 3 seconds to return new blogs
  await new Promise(res => {
    setTimeout(() => {
      res();
    }, 3000);
  });

  return res.status(200).json(blogsToReturn);
});

app.listen(PORT, () => {
  console.log(`Server started listening on portsss: ${PORT}`);
});