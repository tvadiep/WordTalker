import {
  DynamoDBClient,
  ListTablesCommand,
  DynamoDB,
} from "@aws-sdk/client-dynamodb";
const client = new DynamoDBClient();
const dynamodb = new DynamoDB();

export const handler = async (event) => {
  const itemsPerPage = 10;
  const command = ListTablesCommand({
    ExclusiveStartTableName: "Notes",
    Limit: itemsPerPage,
  });
  const response = await client.send(command);
  return {
    statusCode: response.$metadata.httpStatusCode,
    body: JSON.stringify(response.$metadata),
  };
};
