const AWS = require('aws-sdk');

AWS.config.update({region: 'us-east-1'});

//Create promise and SNS service object
let createTopicPromise = new AWS.SNS({apiVersion: '2010-03-31'}).createTopic({Name: "TEXT_TEST"}).promise();

//Handle promise's fulfilled/rejected states
createTopicPromise.then(
    function(data){
        console.log("Topic ARN is " + data.TopicArn);
    }).catch(
        function(err) {
            console.error(err, err.stack)
        });

let topicArn = 'arn:aws:sns:us-east-1:321850270015:TEXT_TEST';
module.exports = topicArn;