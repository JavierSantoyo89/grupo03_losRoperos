const path = require('path');
const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
// ************ Multer ************
//------------------------
aws.config.update({
    accessKeyId: "AKIAR5VH4B3RLTCT5CZR" , 
    secretAccessKey: "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",
    region: 'us-east-2'
});

s3 = new aws.S3();


var upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'some-bucket',
      acl: 'public-read',
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  })

exports.storage = multer({ storage: upload }).single('imgProduct');

//-------------------------
