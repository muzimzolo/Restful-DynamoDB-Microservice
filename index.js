import { marshall } from "@aws-sdk/util-dynamodb";
import { GetItemCommand} from "@aws-sdk/client-dynamodb";
import { ddbClient } from "./ddbClient.js";

export const handler = async (event) => {
    console.log("request:", JSON.stringify(event, undefined, 2))
    // Switch case event.httpmethod to perform CRUD operations with ddbClient
    switch (event.httpMethod) {
      case "GET":
        if(event.pathParameters != null) {
          body = await getProduct(event.pathParameters.id);
        } else {
          body = await getAllProducts();
        }
    }
    return {
      statusCode: 200,
      headers: {"Content-Type": "text/plain"},
      body: `Successful invocation at ${event.path}\n`
    }
  };
  
  const getProduct = async (productId) => {
    console.log("getProduct request");
    try {
      const params = {
        TableName: ProcessingInstruction.env.DYNAMODB_TABLE_NAME,
        Key: marshall({ id: productId })
      };
      const { Item } = await ddbClient.send(new GetItemCommand(params));
      console.log(Item);
      return (Item) ? unmarshall(Item) : {};

    } catch(error) {
      console.error(e)
      throw e;
    }
  }