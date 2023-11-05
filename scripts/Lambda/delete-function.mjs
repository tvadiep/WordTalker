import { DynamoDBClient, DeleteItemCommand } from "@aws-sdk/client-dynamodb";
const client = new DynamoDBClient();

export const handler = async (event) => {
  const { noteKey } = event;
  const { userId, noteId } = noteKey;

  const command = new DeleteItemCommand({
    TableName: "Notes",
    Key: {
      UserId: {
        S: userId,
      },
      NoteId: {
        N: String(noteId),
      },
    },
  });

  const response = await client.send(command);

  return {
    statusCode: response.$metadata.httpStatusCode,
    body: JSON.stringify(response),
  };
};
