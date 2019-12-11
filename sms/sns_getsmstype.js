// Load the AWS SDK for Node.js
let AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'us-east-1'});

// Create SMS Attribute parameter you want to get
let params = {
    attributes: [
        'DefaultSMSType'
    ]
};

// Create promise and SNS service object
let getSMSTypePromise = new AWS.SNS({apiVersion: '2010-03-31'}).getSMSAttributes(params).promise();

// Handle promise's fulfilled/rejected states
getSMSTypePromise.then(
    function(data) {
        console.log(data);
    }).catch(
    function(err) {
        console.error(err, err.stack);
    });
