### Component Overview

This section outlines the key components of the system, detailing their responsibilities and how they are designed for reusability.

| Component   | Description                           | Role               | Reusability                                                          |
| ----------- | ------------------------------------- | ------------------ | -------------------------------------------------------------------- |
| Button      | A customizable button component.      | Reusable button    | Accepts props for different background-color.                        |
| Collapsible | A customizable collapsible component. | Reusable Component | Accepts props for (title , text , onToggle funciton , isExpanded ) . |

### API Routes

| **Feature**          | **Method** | **Endpoint** | **Description**                                            | **Request Body** | **Response**                           | **Authentication** |
| -------------------- | ---------- | ------------ | ---------------------------------------------------------- | ---------------- | -------------------------------------- | ------------------ |
| **Generate QR-Code** | POST       | `/generate`  | Generate a code for the given link.                        | `{"link": link}` | `{ "code": " image code in base64 " }` | None               |
| **Index**            | Get        | `/`          | Returns a response just to verify that the api is running. | None             | `App is running!`                      | None               |
