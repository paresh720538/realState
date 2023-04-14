import AWS from "aws-sdk";


export const DATABASE= "mongodb://127.0.0.1:27017/realistic";

// const AWS_ACCESS_KEY_ID= "AKIAQTTIWYMDHTT6UKK5";
// const AWS_SECRET_ACCESS_KEY ="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";
export const EMAIL_FROM = "pareshtripathy071@gmail.com";
export const REPLY_TO ='pareshtripathy071@gmail.com';


const awsconfig = {
    accessKeyId:"AKIAQTTIWYMDHTT6UKK5",
    accessSecretKey:"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",
    region :'us-east-1',
    apiVersion: "2010-12-01",
};


export const AWSSES = new AWS.SES(awsconfig);