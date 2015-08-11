var base = require('./webpack.dist.config')
var S3Plugin = require('webpack-s3-plugin')
var s3Opts = require('./aws.json')

base.plugins.push(new S3Plugin({
    s3Options: {
        accessKeyId: s3Opts.accessKeyId,
        secretAccessKey: s3Opts.secretAccessKey,
        region: s3Opts.region
    },
    s3UploadOptions: {
        Bucket: s3Opts.bucket,
        ACL: 'public-read'
    },
    basePath: s3Opts.basePath,
    noCdnizer: true
}))

module.exports = base
