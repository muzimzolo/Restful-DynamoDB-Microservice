# Restful-DynamoDB-Microservice
In this repository, I created a microservices deployed on AWS Cloud. It's an ecommerce application that adds products into DynamoDB which makes use of API Gateway for CRUD operations, Lambda to invoke DynamoDB and DynamoDB to store and retrieve data 

## Objective
An ecommerce store is migrating its on-premesis resources to AWS. The store needs to store user data such as orders, user details, items added to cart, checkout processing, items in and out of stock. The service to handle this application logic needs to notify users of delivery status, items in/out of stock as well as process order information with low latency. AWS DynamoDB will store this data, an API gateway is needed to perform CRUD operations to add, delete and update items and AWS Lambda will notify users through SNS 

## Steps and best practices

1. Create a Lambda function
Create a lambda function to handle records to be processed in DynamoDB
Give the lambda function the LambdaMicroserviceExecutionRole this will grant the lambda function permission to interact with DynamoDB
Best practice: store the primary key and DynamoDB table name in environment variables
The lambda code can be found in the develop branch
3. 
4. 
