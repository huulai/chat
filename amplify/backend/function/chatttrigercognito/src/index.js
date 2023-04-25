/* Amplify Params - DO NOT EDIT
	API_CHAT_GRAPHQLAPIIDOUTPUT
	API_CHAT_USERTABLE_ARN
	API_CHAT_USERTABLE_NAME
	AUTH_CHAT_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
var aws = require("aws-sdk");
var ddb = new aws.DynamoDB();

exports.handler = async (event, context) => {
  let date = new Date();
    console.log('event', event)
  if (event.request.userAttributes.sub) {
    let params = {
      Item: {
        id: { S: event.request.userAttributes.sub },
        __typename: { S: "User" },
        username: { S: event.userName },
        name: { S: event.request.userAttributes.name },
        email: { S: event.request.userAttributes.email },
        createdAt: { S: date.toISOString() },
        updatedAt: { S: date.toISOString() },
      },
      TableName: "User-ko2aivarmzf2zlklzergdwdjqa-staging",
    };

    // Call DynamoDB
    try {
      await ddb.putItem(params).promise();
      console.log("Success");
    } catch (err) {
      console.log("Error", err);
    }

    console.log("Success: Everything executed correctly");
    context.done(null, event);
  } else {
    // Nothing to do, the user's email ID is unknown
    console.log("Error: Nothing was written to DynamoDB");
    context.done(null, event);
  }
};
