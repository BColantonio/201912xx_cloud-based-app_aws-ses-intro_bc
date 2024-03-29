const importArn = require('./sns_createtopic');

// Load the AWS SDK for Node.js
let AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'us-east-1'});

// Create publish parameters
let params = {
    Message: `This is your first test text published to: ${importArn}`, /* required */
    TopicArn: importArn
};

// Create promise and SNS service object
let publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

// Handle promise's fulfilled/rejected states
publishTextPromise.then(
    function(data) {
        console.log(`Message ${params.Message} send sent to the topic ${params.TopicArn}`);
        console.log("MessageID is " + data.MessageId);
    }).catch(
    function(err) {
        console.error(err, err.stack);
    });
