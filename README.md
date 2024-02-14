# Restful-DynamoDB-Microservice
In this repository, I created a microservices deployed on AWS Cloud. It's an ecommerce application that adds products into DynamoDB which makes use of API Gateway for CRUD operations, Lambda to invoke DynamoDB and DynamoDB to store and retrieve data 

## Objective
An ecommerce store is migrating its on-premesis resources to AWS. The store needs to store user data such as orders, user details, items added to cart, checkout processing, items in and out of stock. The service to handle this application logic needs to notify users of delivery status, items in/out of stock as well as process order information with low latency. AWS DynamoDB will store this data, an API gateway is needed to perform CRUD operations to add, delete and update items and AWS Lambda will notify users through SNS 
