import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand, GetCommand } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const ddb = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
  const { operation, payload } = JSON.parse(event.body);

  if (operation === "create") {
    await ddb.send(new PutCommand(payload));
    return { statusCode: 200, body: JSON.stringify({ message: "Item created" }) };
  }

  if (operation === "read") {
    const data = await ddb.send(new GetCommand(payload));
    return { statusCode: 200, body: JSON.stringify(data.Item) };
  }
};
