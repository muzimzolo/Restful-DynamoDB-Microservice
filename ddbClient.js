import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
const REGION = "af-south-1"; // Resources region
const ddbClient = new DynamoDBClient({region: REGION});
export { ddbClient };
