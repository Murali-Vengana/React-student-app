<img width="1774" height="887" alt="React Frontend Flow and API Integration" src="https://github.com/user-attachments/assets/5b525dce-5fac-4986-88c4-e2ceffd58dca" />

# Student Management App — React Frontend

A React-based student management interface for viewing student records and managing student details through a Spring Boot REST API.

> **Backend note:** This ZIP contains the React frontend. The Spring Boot service and MySQL database are expected to run separately.

![Student Management Architecture](docs/student-management-architecture.png)

## Table of contents

- [Features](#features)
- [Technology stack](#technology-stack)
- [Project structure](#project-structure)
- [Architecture and workflow](#architecture-and-workflow)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Backend API configuration](#backend-api-configuration)
- [Student fields](#student-fields)
- [Troubleshooting](#troubleshooting)
- [Potential improvements](#potential-improvements)

## Features

- Student dashboard with a table of student records.
- Add-student modal and form.
- Edit action that passes the selected student to the modal.
- Delete confirmation flow.
- Form validation using React Hook Form.
- Loading placeholders using `react-loading-skeleton`.
- React Bootstrap components and Bootstrap styling.
- React Router navigation to the Students page.
- Friendly loading and empty-state UI (see troubleshooting notes about displaying API errors).

## Technology stack

| Technology | Purpose |
|---|---|
| React 19 | Component-based UI |
| React Router | Client-side navigation |
| React Bootstrap | Tables, buttons, and modal components |
| Bootstrap 5 | UI styling |
| React Hook Form | Form state and validation |
| react-loading-skeleton | Loading shimmer placeholders |
| Fetch API | HTTP communication with the backend |
| Spring Boot (separate service) | REST API |
| MySQL (separate service) | Persistent student data |

Versions are taken from the project's `package.json`; install the lockfile dependencies with `npm install`.

## Project structure

```text
React-student-app-main/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── logo192.png
│   └── logo512.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── LeftPannel.jsx
│   │   ├── ListAllStudents.jsx
│   │   ├── StudentDashboard.jsx
│   │   ├── StudentForm.jsx
│   │   ├── StudentModal.jsx
│   │   └── StudentShimmer.jsx
│   ├── html-form/
│   │   ├── Studentform.html
│   │   └── student.js
│   ├── images/
│   │   ├── delete.png
│   │   ├── edit.jpeg
│   │   └── logo.jpeg
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── docs/
│   └── student-management-architecture.png
├── package.json
└── package-lock.json
```

### Important components

- **`App.js`** — Sets up `BrowserRouter`, the left panel, and the `/students` route.
- **`StudentDashboard.jsx`** — Owns modal visibility, operation mode (`add`, `edit`, or `delete`), and the selected student.
- **`ListAllStudents.jsx`** — Fetches student data and renders the table, edit/delete actions, and loading shimmer.
- **`StudentModal.jsx`** — Displays the modal title, student form, and modal footer actions.
- **`StudentForm.jsx`** — Defines student fields and React Hook Form validation, and submits create/update requests.
- **`StudentShimmer.jsx`** — Shows skeleton rows while student data is loading.
- **`LeftPannel.jsx`** — Renders the side navigation and logo.

## Architecture and workflow

The frontend communicates with the Spring Boot API over HTTP using JSON. The backend is responsible for persistence and communicates with MySQL.

1. Start the React app and open the **Students** route.
2. `ListAllStudents` requests student data from the backend.
3. While waiting, `StudentShimmer` displays placeholder rows.
4. The user can open the modal to add a student or select a row to edit/delete.
5. The frontend sends the appropriate HTTP request.
6. After a successful operation, refresh the student list so it reflects the server state.

See the architecture image above. The diagram is stored at `docs/student-management-architecture.png`, so it will render in GitHub when the README and `docs` folder are committed together.

## Prerequisites

- Node.js and npm.
- A running Spring Boot backend.
- MySQL configured for the backend.
- Backend CORS configuration that allows the React development origin, normally `http://localhost:3000`.

Check versions:

```bash
node --version
npm --version
```

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/Murali-Vengana/React-student-app.git
cd React-student-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the backend

Start the Spring Boot application separately and confirm it is listening at the configured API host and port. The current frontend code uses `http://localhost:9090`.

### 4. Start React

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Create a production build

```bash
npm run build
```

## Backend API configuration

The current source code contains these API calls:

| Operation | Method | URL used by the frontend |
|---|---|---|
| List students | `GET` | `/students/getAllStudents` |
| Add student | `POST` | `/student/saveStudent` |
| Update student | `POST` | `/student/updateStudent/{id}` |
| Delete student | `DELETE` | `/students/deleteStudent/{id}` |

The frontend currently prefixes these paths with `http://localhost:9090`.

**Important:** The source uses both `/student` and `/students` prefixes. Confirm the exact mappings in your Spring Boot controller and make the frontend URLs consistent with those mappings. If the backend update endpoint uses `@PutMapping`, change the update request from `POST` to `PUT`.

Example JSON shape used by the form:

```json
{
  "studentName": "Ravi",
  "email": "ravi@example.com",
  "sex": "Male",
  "dob": "2000-05-15",
  "hobbies": ["Reading", "Music"],
  "course": "Computer Science"
}
```

The exact fields accepted by the backend must match the Spring Boot `Student` entity or request DTO.

## Student fields

The form contains the following fields:

- `studentName` — required text.
- `email` — required email.
- `sex` — radio selection.
- `dob` — date input in `YYYY-MM-DD` format.
- `hobbies` — one or more checkboxes.
- `course` — course selection.

The edit flow uses the selected student object to populate the form. Ensure the API response includes the student's `id`, since update and delete requests use it.

## Troubleshooting

### Student list is empty

- Confirm the backend is running.
- Open `http://localhost:9090/students/getAllStudents` in a browser or API client.
- Check the browser developer console and Network tab.
- Confirm the API returns a JSON array.

### API is unreachable or CORS fails

- Verify the host, port, and endpoint path.
- Configure Spring Boot CORS to allow `http://localhost:3000`.
- Check the backend console for exceptions.

### Update creates a new student

- Confirm the selected student has a non-null `id`.
- Confirm the backend update method loads the existing entity by ID before saving.
- Confirm the endpoint and HTTP method match the Spring Boot controller mapping.

### API errors appear as an empty state

`ListAllStudents.jsx` sets an `error` state when a request fails, but the current render flow does not display that error state separately. Add an `if (error)` branch before the empty-data check to distinguish an API failure from a successful response containing no records.

### Delete does not work

- Confirm the URL matches the backend `@DeleteMapping`.
- Check that the selected student has an `id`.
- Trigger the DELETE request from the confirmation button and only close the modal after a successful response.

## Potential improvements

- Move the API base URL to an environment variable such as `REACT_APP_API_BASE_URL`.
- Centralize fetch calls in a dedicated API/service module.
- Display distinct loading, empty, and error states.
- Refresh the list after successful create, update, and delete operations.
- Add confirmation and visible success/error notifications.
- Use stable student IDs as React row keys instead of array indexes.
- Add automated tests for form validation and CRUD flows.
- Replace placeholder navigation entries with real pages as those features are implemented.

---

## Author

**Murali Vengana**

GitHub: [Murali-Vengana](https://github.com/Murali-Vengana)

Repository: [React-student-app](https://github.com/Murali-Vengana/React-student-app)
