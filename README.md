Webpack Template
==

I use this for new projects. You can too, if you like inflexible, highly opinionated build systems!

It uses Webpack for building, and will process all your ES6 JS and SCSS files, then publish them to S3 if you'd like. I haven't yet had the need for anything else - when I do, I'll put it in.

After cloning, run `npm install`.

Tasks
--

`npm run watch`

Runs Webpack in "hot" mode, where it will automatically reload CSS and/or the page as you change files. Also includes source maps in JS and SCSS.

`npm run dist`

Builds your files for production - minified with no source maps. Places them in the `dist` directory.

`npm run publish`

Does the above, but also pushes them up to S3. Requires a file, `aws.json`, with access key, secret, bucket and so on. There's an example file in the repo.
