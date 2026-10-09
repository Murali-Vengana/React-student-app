<img width="1536" height="1024" alt="React Student App Architecture Guide" src="https://github.com/user-attachments/assets/63c5f524-0bb6-46ee-b5ec-a2b1b12f0936" />


# React Student Management Application

A React-based Student Management Application that provides a simple interface to manage student records. The application supports adding students, viewing student details, and performing CRUD operations through REST API integration with a Spring Boot backend.

## 🚀 Features

- **Add Student:** Register students with personal and academic details.
- **List Students:** View registered students in a tabular format.
- **Edit Student:** Update existing student information.
- **Delete Student:** Remove student records.
- **Form Validation:** Validate mandatory fields using React Hook Form.
- **Navigation:** Navigate between application pages using React Router.
- **REST API Integration:** Communicate with the Spring Boot backend to manage student data.
- **Reusable Components:** Organize the UI into reusable React components.
- **Action Icons:** Use edit and delete icons for student record management.

## 🛠️ Technologies Used

- **Frontend:** React.js, JavaScript, HTML5, CSS3
- **Routing:** React Router DOM
- **Form Handling:** React Hook Form
- **API Integration:** Axios / Fetch API, depending on the service implementation
- **Backend:** Spring Boot REST APIs
- **Database:** MySQL
- **Package Management:** npm
- **Version Control:** Git and GitHub

## 📁 Project Structure

```text
React-student-app/
├── public/
│   ├── images/
│   │   ├── editIcon.png
│   │   └── deleteIcon.png
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── LeftPanel.jsx
│   │   ├── Student.jsx
│   │   └── ListAllStudents.jsx
│   ├── services/
│   │   └── StudentService.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── package-lock.json
└── README.md
```

## 📌 Component Responsibilities

| File | Description |
|---|---|
| `App.jsx` | Main application component and page routing |
| `LeftPanel.jsx` | Sidebar navigation |
| `Student.jsx` | Student registration form and form validation |
| `ListAllStudents.jsx` | Displays student records and provides edit/delete actions |
| `StudentService.jsx` | Handles communication with backend REST APIs |
| `App.css` | Application-level styling |
| `index.css` | Global CSS styles |
| `index.js` | React application entry point |
| `public/images/` | Contains icons used in the UI |

## 🔄 Application Flow

1. Launch the React application.
2. Navigate using the sidebar.
3. Open the Add Student page and enter student details.
4. Validate the form and submit the data to the backend.
5. The Spring Boot REST API processes the request and persists student information in MySQL.
6. Open the student list to retrieve and display registered students.
7. Edit or delete student records using the available action icons.

### Architecture

```text
React UI
   |
   ├── Student.jsx
   └── ListAllStudents.jsx
            |
            v
   StudentService.jsx
            |
            | HTTP / JSON
            v
   Spring Boot REST API
            |
            v
          MySQL
```

## ⚙️ Getting Started

### Prerequisites

- Node.js and npm
- A running Spring Boot backend
- MySQL database configured in the backend

### Installation

Clone the repository:

```bash
git clone https://github.com/Murali-Vengana/React-student-app.git
```

Navigate to the project directory:

```bash
cd React-student-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open the application at:

```text
http://localhost:3000
```

## 🔗 Backend Integration

Configure the backend API base URL in the service layer to match your Spring Boot server.

Example:

```text
http://localhost:9090
```

Ensure that the Spring Boot backend is running and that CORS allows requests from the React development server.

## 🎯 Learning Objectives

This project demonstrates practical usage of:

- React functional components and component composition
- React Hooks and form handling
- Client-side routing
- Form validation and error handling
- REST API integration
- CRUD operations
- Frontend and backend integration
- Git and GitHub workflows

## 👨‍💻 Author

**Murali Vengana**

GitHub: [Murali-Vengana](https://github.com/Murali-Vengana)

---

*This project is intended for learning and demonstrating student management workflows using React and Spring Boot.*
