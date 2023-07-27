# Routes Documentation

This documentation provides an overview of the routes and their functionalities implemented in the application.

## Table of Contents

---

### GET /tasks

Retrieves a list of all tasks from the database.

- Method: GET
- Path: /tasks

<details>
<summary><strong>Response</strong></summary>
<pre><code>
Status: 200 OK
Content-Type: application/json
Body: An array of tasks in JSON format.
</code></pre>
</details>

---

### GET /tasks/:id

Retrieves a specific task with the given ID from the database.

- Method: GET
- Path: /tasks/:id

**Parameters**

- id (string) - The ID of the task to retrieve.

<details>
<summary><strong>Response</strong></summary>
<pre><code>
Status: 200 OK
Content-Type: application/json
Body: The task object in JSON format.
</code></pre>
</details>

<details>
<summary><strong>Error Responses</strong></summary>
<pre><code>
Status: 404 Not Found
Content-Type: application/json
Body: { "err": "taskNotFound" }
</code></pre>
</details>

---

### POST /tasks

Creates a new task and adds it to the database.

- Method: POST
- Path: /tasks

<details>
<summary><strong>Request Body</strong></summary>
<pre><code>
{
  "title": "Task Title",
  "description": "Task Description"
}
</code></pre>
</details>

<details>
<summary><strong>Response</strong></summary>
<pre><code>
Status: 201 Created
</code></pre>
</details>

<details>
<summary><strong>Error Responses</strong></summary>
<pre><code>
Status: 400 Bad Request
Content-Type: application/json
Body: { "err": "titleIsRequired" }
</code></pre>
</details>

---

### POST /tasks/csv

Creates multiple tasks from a CSV (Comma Separated Values) file and adds them to the database.

- Method: POST
- Path: /tasks/csv

<details>
<summary><strong>Request Body</strong></summary>
<pre><code>
[
  {
    "title": "Task 1",
    "description": "Description 1"
  },
  {
    "title": "Task 2",
    "description": "Description 2"
  },
  {
    "title": "Task 3",
    "description": "Description 3"
  }
]
</code></pre>
</details>

<details>
<summary><strong>Response</strong></summary>
<pre><code>
Status: 201 Created
</code></pre>
</details>

---

### PUT /tasks/:id

Updates an existing task with the given ID in the database.

- Method: PUT
- Path: /tasks/:id

**Parameters**

- id (string) - The ID of the task to update.

<details>
<summary><strong>Request Body</strong></summary>
<pre><code>
{
  "title": "Updated Task Title",
  "description": "Updated Task Description"
}
</code></pre>
</details>

<details>
<summary><strong>Response</strong></summary>
<pre><code>
Status: 204 No Content
</code></pre>
</details>

<details>
<summary><strong>Error Responses</strong></summary>
<pre><code>
Status: 404 Not Found
Content-Type: application/json
Body: { "err": "taskNotFound" }
</code></pre>
</details>

---

### PATCH /tasks/:id/complete

Marks a specific task as completed with the given ID in the database.

- Method: PATCH
- Path: /tasks/:id/complete

**Parameters**

- id (string) - The ID of the task to mark as completed.

<details>
<summary><strong>Response</strong></summary>
<pre><code>
Status: 204 No Content
</code></pre>
</details>

<details>
<summary><strong>Error Responses</strong></summary>
<pre><code>
Status: 404 Not Found
Content-Type: application/json
Body: { "err": "taskNotFound" }
</code></pre>
</details>

---

### DELETE /tasks/:id

Deletes a specific task with the given ID from the database.

- Method: DELETE
- Path: /tasks/:id

**Parameters**

- id (string) - The ID of the task to delete.

<details>
<summary><strong>Response</strong></summary>
<pre><code>
Status: 204 No Content
</code></pre>
</details>

<details>
<summary><strong>Error Responses</strong></summary>
<pre><code>
Status: 404 Not Found
Content-Type: application/json
Body: { "err": "taskNotFound" }
</code></pre>
</details>

---
