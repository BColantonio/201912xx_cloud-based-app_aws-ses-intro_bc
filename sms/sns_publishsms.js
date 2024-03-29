// Load the AWS SDK for Node.js
let AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'us-east-1'});

// Create publish parameters
let params = {
    Message: 'Salutations! this text was sent from my newly written aws application built with node.js!', /* required */
    PhoneNumber: '+14012907766',
};

// Create promise and SNS service object
let publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

// Handle promise's fulfilled/rejected states
publishTextPromise.then(
    function(data) {
        console.log("MessageID is " + data.MessageId);
    }).catch(
    function(err) {
        console.error(err, err.stack);
    });