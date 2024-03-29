# Restful-DynamoDB-Microservice
In this repository, I created a microservices deployed on AWS Cloud. It's an ecommerce application that adds products into DynamoDB which makes use of API Gateway for CRUD operations, Lambda to invoke DynamoDB and DynamoDB to store and retrieve data 

## Objective
An ecommerce store is migrating its on-premesis resources to AWS. The store needs to store user data such as orders, user details, items added to cart, checkout processing, items in and out of stock. The service to handle this application logic needs to notify users of delivery status, items in/out of stock as well as process order information with low latency. AWS DynamoDB will store this data, an API gateway is needed to perform CRUD operations to add, delete and update items and AWS Lambda will notify users through SNS 

## Steps and best practices

1. Create a Lambda function
 
- Create a lambda function to handle records to be processed in DynamoDB

- Give the lambda function the LambdaMicroserviceExecutionRole this will grant the lambda function permission to interact with DynamoDB

- Our lambda function will make use of DynamoDB SDK client. See official DynamoDB documentation

- Install the DynamoDB client into your project on the CLI by running 'npm install @aws-sdk/client-dynamodb'

-  Install the DynamoDB util package. This package provides utilities to be used with @aws-sdk/client-dynamodb. Install this package by running 'npm install @aws-sdk/util-dynamodb'

- Create a DynamoDB client class. This class uses SDK to create any dynamic DB client object to interact with DynamoDB API and specifying the region information

- Best practice: store the primary key and DynamoDB table name in environment variables

- The lambda code can be found in the develop branch

2. Create an API Gateway

This step involves creating a REST API in API Gateway to perform CRUD operations. When our API method receives an HTTP request, API gateway invokes lambda function. The HTTP requests will be called from the client application and redirected to lambda function. See api-design.txt to see the API design

- On the AWS console navigate to API Gateway -> select restful API -> new API -> add a name -> create API
  
- Add resource to API i.e. product
  
- Add methods to product resource: GET and POST -> integration type lambda -> select lambda proxy integration -> select the above created lambda function under resource ARN. Repeat this step for all methods 

- Add resource {id} this is to handle products by ID
  
- Add methods to product/{id}: GET, PUT and DELETE

- Deploy the API -> select/create a stage -> give the stage a name -> deploy -> under stage you will have the API's invocation url to interact with the API

- You can interact with the url on Postman. See sample-payload for POST request 

- Create a package.json file by running 'npm init -y'. This file holds various metadata about the project, such as its name, version, dependencies, scripts, and other configurations

- Add "type": "module" to the package.json file to indicate that the project is using ECMAScript modules (ES modules) syntax instead of the CommonJS syntax by default.

3. 

