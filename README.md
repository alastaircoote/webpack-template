Webpack Template
==

I use this for new projects. You can too, if you like inflexible, highly opinionated build systems!

It uses Webpack for building, and will process all your ES6 JS and SCSS files, then publish them to S3 if you'd like. I haven't yet had the need for anything else - when I do, I'll put it in.

After cloning, run `npm install`.

Things about this/Webpack that are a bit weird
--

- It technically only has one requirement - that `src/main.js` exists, which is where the code execution starts.
- You require everything.
 - Want to include some SCSS? `require('myfile.scss')`.
 - Want to use an image? `require('animage.jpg')` will return a filename (Webpack does all kinds of crazy hash-y things so it won't be `animage.jpg`) which you can then place inside an `<img>` tag or whatever.
- It has a template file in `src/index.template.html`, which is processed by [HtmlWebpackPlugin](https://github.com/ampedandwired/html-webpack-plugin/blob/master/default_index.html). If only outputs one file, index.html - but you can change that by tweaking the Webpack options.
- Speaking of which, the Webpack options are in `webpack.config.js`.

Tasks
--

`npm run watch`

Runs Webpack in "hot" mode, where it will automatically reload CSS and/or the page as you change files. Also includes source maps in JS and SCSS.

`npm run dist`

Builds your files for production - minified with no source maps. Places them in the `dist` directory.

`npm run publish`

Does the above, but also pushes them up to S3. Requires a file, `aws.json`, with access key, secret, bucket and so on. There's an example file in the repo.
