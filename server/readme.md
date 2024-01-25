# Server Assignments

This document outlines the assignments for the server development.

## 1. Activate Web Socket

- Enable WebSocket functionality to establish real-time communication between the server and clients.

## 2. Connect to Language Providers

- Find a way to connect to language providers via free API or local runtime environments.
- Implement the necessary integration to execute code snippets in various programming languages.

## 3. Data Protection

- Implement measures to protect the data stored in the database.
- Ensure secure storage and transmission of sensitive information.

## 4. Code Snippet Expiration

- Implement logic to automatically expire code snippets after 24 hours.
- Check if the user who created the snippet is a paid account before expiring.

## 5. Code Snippet Collaboration

[//]: # (BEGIN: /c:/dev/whatTheBUG/server/readme.md)

To enable code snippet collaboration, implement the following features:

### User Code Snippet Creation (CRUD)

1. Allow users to create, read, update, and delete their own code snippets.
2. Implement an API endpoint or user interface for users to perform CRUD operations on their code snippets.
3. Validate user input and handle errors gracefully.

### Fix Suggestion Submission and Review

1. Allow users to submit fix suggestions for code snippets created by other users.
2. Implement a mechanism for the original code snippet creator to review and accept/reject fix suggestions.
3. Notify the original code snippet creator of new fix suggestions.
4. Provide a user-friendly interface for reviewing and managing fix suggestions.

[//]: # (END: /c:/dev/whatTheBUG/server/readme.md)


Please refer to the individual sections below for detailed instructions and requirements for each assignment.

---

## 1. Activate Web Socket

[//]: # (BEGIN: /c:/dev/whatTheBUG/server/readme.md)

To activate WebSocket functionality, follow these steps:

1. Install the necessary WebSocket library for your server framework.
2. Configure the WebSocket server to listen for incoming connections.
3. Implement the necessary event handlers to handle WebSocket messages.
4. Test the WebSocket functionality using a WebSocket client.

[//]: # (END: /c:/dev/whatTheBUG/server/readme.md)

---

## 2. Connect to Language Providers

[//]: # (BEGIN: /c:/dev/whatTheBUG/server/readme.md)

To connect to language providers, you have two options:

### Option 1: Free API

1. Research and identify free API services that provide language execution capabilities.
2. Register for an API key or authentication credentials, if required.
3. Integrate the API into your server code to execute code snippets.

### Option 2: Local Runtime Environments

1. Set up local runtime environments for each programming language you want to support.
2. Implement the necessary logic to execute code snippets within these runtime environments.
3. Ensure proper security measures are in place to prevent unauthorized access.

[//]: # (END: /c:/dev/whatTheBUG/server/readme.md)

---

## 3. Data Protection

[//]: # (BEGIN: /c:/dev/whatTheBUG/server/readme.md)

To protect the data stored in the database, consider the following:

1. Implement secure authentication and authorization mechanisms.
2. Encrypt sensitive data before storing it in the database.
3. Use secure protocols for data transmission, such as HTTPS.
4. Regularly update and patch server software to address security vulnerabilities.

[//]: # (END: /c:/dev/whatTheBUG/server/readme.md)

---

## 4. Code Snippet Expiration

[//]: # (BEGIN: /c:/dev/whatTheBUG/server/readme.md)

To implement code snippet expiration, follow these steps:

1. Add a timestamp field to the code snippet data structure.
2. When a code snippet is created, store the current timestamp in the timestamp field.
3. Periodically check the timestamp of each code snippet.
4. If the difference between the current timestamp and the snippet's timestamp exceeds 24 hours and the user is not a paid account, delete the snippet.

[//]: # (END: /c:/dev/whatTheBUG/server/readme.md)
