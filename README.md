# Unhandled Error in Express.js POST Request: Missing Request Body Check

This repository demonstrates a common error in Express.js applications where POST requests are not properly handled when the request body is missing.  The server crashes without appropriate error handling.  The solution shows how to add robust checks for missing or invalid request bodies.

## Bug

The bug lies in the `/users` POST route.  It directly attempts to access `req.body` without checking if it's available, leading to an error when a request is made without a body.  This lack of validation is a security risk and can lead to server instability.

## Solution

The solution adds a check to ensure `req.body` exists before processing the request.  It includes better error handling to return appropriate HTTP status codes to the client and improve user experience.  A more comprehensive approach would involve validation of individual request body fields using a library such as Joi or express-validator.