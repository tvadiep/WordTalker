// This function is about to create a new lambda function

import { PutItemCommand, DynamoDBClient } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({});

export const handler = async (event) => {
  const { data } = event;
  const { userId, noteId, note } = data;

  const command = new PutItemCommand({
    TableName: "Notes",
    Item: {
      UserId: { S: userId },
      NoteId: { N: String(noteId) },
      Note: { S: note },
    },
  });

  const response = await client.send(command);

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
