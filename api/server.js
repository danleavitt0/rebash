// server.js

// BASE SETUP
// =============================================================================

var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
var AWS = require('aws-sdk')
AWS.config.loadFromPath('./AWSConfig.json')

var s3 = new AWS.S3();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

var port = process.env.PORT || 5000   // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router()              // get an instance of the express Router

router.route('/posts')
  .get(function (req, res) {
    s3.listBuckets(function(err, data) {
      if (err) { console.log("Error:", err) }
      else {
        res.json({buckets: data.Buckets})
      }
    })
  })

router.route('/projects')
  .get(function (req, res) {
    res.json({response: 'success'})
  })

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' })
});

// more routes for our API will happen here
app.use('/api', router)

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port)
