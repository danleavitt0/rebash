var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
var AWS = require('aws-sdk')
AWS.config.loadFromPath('api/AWSConfig.json')

var s3 = new AWS.S3()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

var port = process.env.PORT || 5000

var router = express.Router()

router.route('/posts')
  .get(function (req, res) {
    s3.listBuckets(function (err, data) {
      if (err) {
        console.log('Error:', err)
      } else {
        res.json({ buckets: data.Buckets })
      }
    })
  })

router.route('/projects')
  .get(function (req, res) {
    res.json({response: 'success'})
  })
  .post(function (req, res) {
    console.log(req.body.name)
    var params = {
      Bucket: req.body.name
    }
    s3.createBucket(params, function (err, data) {
      if (err) {
        res.json({ok: false, err: err})
      } else {
        res.json({ok: true, file: data})
      }
    })
  })

router.get('/', function (req, res) {
  res.json({ message: 'hooray! welcome to our api!' })
})

app.use('/api', router)

app.listen(port)
console.log('Magic happens on port ' + port)
