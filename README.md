# Routes Documentation

This documentation provides an overview of the routes and their functionalities implemented in the application.

## Table of Contents

### GET /tasks

Retrieves a list of all tasks from the database.

- Method: GET
- Path: /tasks

**Response**

- Status: 200 OK
- Content-Type: application/json
- Body: An array of tasks in JSON format.

### GET /tasks/:id

Retrieves a specific task with the given ID from the database.

- Method: GET
- Path: /tasks/:id

**Parameters**

- id (string) - The ID of the task to retrieve.

**Response**

- Status: 200 OK
- Content-Type: application/json
- Body: The task object in JSON format.

**Error Responses**

- Status: 404 Not Found
- Content-Type: application/json
- Body: { "err": "taskNotFound" }

### POST /tasks

Creates a new task and adds it to the database.

- Method: POST
- Path: /tasks

**Request Body**
The request body must be a JSON object containing the following properties:

- title (string, required) - The title of the task.
- description (string, required) - The description of the task.

**Response**

- Status: 201 Created

**Error Responses**

- Status: 400 Bad Request
- Content-Type: application/json
- Body: { "err": "titleIsRequired" }

### POST /tasks/csv

Creates multiple tasks from a CSV (Comma Separated Values) file and adds them to the database.

- Method: POST
- Path: /tasks/csv

**Request Body**
The request body must be an array of task objects in JSON format. Each task object should have the following properties:

- title (string, required) - The title of the task.
- description (string, required) - The description of the task.

**Response**

- Status: 201 Created

### PUT /tasks/:id

Updates an existing task with the given ID in the database.

- Method: PUT
- Path: /tasks/:id

**Parameters**

- id (string) - The ID of the task to update.

**Request Body**
The request body must be a JSON object containing the following properties:

- title (string, required) - The updated title of the task.
- description (string, required) - The updated description of the task.

**Response**

- Status: 204 No Content

**Error Responses**

- Status: 404 Not Found
- Content-Type: application/json
- Body: { "err": "taskNotFound" }

### PATCH /tasks/:id/complete

Marks a specific task as completed with the given ID in the database.

- Method: PATCH
- Path: /tasks/:id/complete

**Parameters**

- id (string) - The ID of the task to mark as completed.

**Response**

- Status: 204 No Content

**Error Responses**

- Status: 404 Not Found
- Content-Type: application/json
- Body: { "err": "taskNotFound" }

### DELETE /tasks/:id

Deletes a specific task with the given ID from the database.

- Method: DELETE
- Path: /tasks/:id

**Parameters**

- id (string) - The ID of the task to delete.

**Response**

- Status: 204 No Content

**Error Responses**

- Status: 404 Not Found
- Content-Type: application/json
- Body: { "err": "taskNotFound" }
