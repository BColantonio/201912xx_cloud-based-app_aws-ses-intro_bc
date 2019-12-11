// Load the AWS SDK for Node.js
let AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'us-east-1'});

let topicArn = 'arn:aws:sns:us-east-1:321850270015:TEXT_TEST'

// Create promise and SNS service object
let deleteTopicPromise = new AWS.SNS({apiVersion: '2010-03-31'}).deleteTopic({TopicArn: topicArn}).promise();

// Handle promise's fulfilled/rejected states
deleteTopicPromise.then(
    function(data) {
        console.log("Topic Deleted");
    }).catch(
    function(err) {
        console.error(err, err.stack);
    });

