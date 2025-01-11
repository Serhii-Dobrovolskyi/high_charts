# Review System for TalentHive

## Overview

In this project, I implemented an initial prototype of a review system, for the TalentHive platform.

Registered users can leave reviews about services. Each review consists of service selection, rating, comment and date of submission.
! Given that the user is already registered, he does not need to enter his name in the form, and the name comes from the server.
The system fits seamlessly into the design of the platform and utilizes React.js along with Material-UI (MUI) to create a clean and responsive user interface.

---

## Design Choices

### **Alignment with TalentHive's Style**

The design meets the core criteria of the TalentHive platform:

- **Font**: Fonts such as `Ubuntu` and `Inter` were used to maintain consistency with the platform.
- **Color Palette**: Gold and neutral tones align with the website's branding.
- **Layout**: The components are designed with Material-UI, as the site also uses this library.

---

## Technical Approach

### 1. **Frontend**

- **React.js**: The application is modular, with components for:
  - `ReviewForm`: Handles input and submission of reviews.
  - `ReviewList`: Displays submitted reviews in an organized card layout.
- **Material-UI (MUI)**: Provides a modern and customizable design framework.

### 2. **Backend integration**

- **Server Setup:**: Created an index.js file in the server folder where the main server code is configured using `Express.js`.
- **Connecting middleware:** `cors` Created Allows the server to process incoming data in JSON format.
- **Adding temporary authentication:** Created an auth object representing an authorized user (in this case with fixed id and name) to bind the username to reviews.
- **Implementation of CRUD API:** GET, POST, DELETE, PATCH.

### 3. **Validation**

- Required fields (service selection, rating, and comment) are enforced to ensure data completeness.
- Visual cues (e.g., error prompts) are provided for any missing fields.

---

## How to Run
For convenience in the project, I also used the approach - Monorepo.


Now we can start the server part in the `server` folder and the client part in the `client` folder with one command from the parent folder `review_system`.

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Install dependencies for both (server and client) `npm run installAll`.
3. Start project with `npm run dev` from the parent folder `review_system` .
4. The app will be available at `http://localhost:5173/`.

---

---

## Conclusion

This project demonstrates a simple, scalable, and usable prototype of a review system that matches the design and goals of the TalentHive platform. By utilizing React.js + TypeScipt and Material-UI, the application remains flexible for future improvements.
