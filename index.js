const AWS = require("aws-sdk");

AWS.config.update({
    region: 'us-east-1'
});

function getTime() {
    let d = new Date();
    return d.toTimeString();

}

const ses = new AWS.SES({ apiVersion: "2010-12-01" });
const params = {
        Destination: {
            ToAddresses: ["brianjc87@gmail.com"] // Email address/addresses that you want to send your email
        },
        // },
        // ConfigurationSetName: <<ConfigurationSetName>>,
    Message: {
        Body: {
            Html: {
                // HTML Format of the email
                Charset: "UTF-8",
                Data:
                    `<html><body><h1>Hello  Brian!</h1><p style='color:red'>Sample description</p> <p>Time ${getTime()}</p></body></html>`
            },
            Text: {
                Charset: "UTF-8",
                Data: `Hello Brian Sample description time ${getTime()}`
            }
        },
        Subject: {
            Charset: "UTF-8",
            Data: "Test email"
        }
    },
    Source: "brian.j.colantonio@gmail.com"
};

const sendEmail = ses.sendEmail(params).promise();

sendEmail
    .then(data => {
        console.log("email submitted to SES", data);
    })
    .catch(error => {
        console.log(error);
    });


