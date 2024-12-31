# Voting App

## Overview
The Voting App is a web application designed to facilitate the management of elections and representatives. It allows users to view elections, manage representatives, and track the status of ongoing and concluded elections. This document provides an overview of the project's structure and functionality.

## Features
- **Elections Management**:
  - View detailed information about individual elections.
  - Add new elections with alternatives and assigned representatives.
  - Edit elections as needed.
  - Display a list of all elections categorized by their status (e.g., active, concluded).

- **Representatives Management**:
  - Add new representatives with their name and email.
  - Edit existing representatives' details.
  - Display a grid of all representatives.

- **User Interface**:
  - Intuitive navigation with a top navigation bar.
  - Responsive design for accessibility on various devices.

## Project Structure

### Pages

#### Home Page (`HomePage`)
- Provides links to view elections, manage representatives, and view concluded elections.
- Highlights the purpose of the application.

#### Election Detail Page (`ElectionDetailPage`)
- Displays details for a specific election including representatives and alternatives.
- Handles scenarios where an election is not found.
- Generates initial votes for representatives and alternatives.

#### Representatives Management Page (`RepresentativesManagementPage`)
- Allows users to add and edit representatives.
- Displays a list of all representatives in a grid layout.

#### Concluded Elections Page (`ConcludedElectionsPage`)
- Lists all concluded elections with their details.
- Displays a message if no concluded elections are available.

#### Elections Overview Page (`ElectionsOverviewPage`)
- Provides a summary of all elections.
- Includes an edit feature for each election.

### Components

#### Add Election (`AddElection`)
- Modal-based form for adding a new election.
- Handles input for election name, description, status, alternatives, and assigned representatives.

#### Add Representative (`AddRepresentative`)
- Modal-based form for adding a new representative.
- Handles input for representative name and email.

#### Edit Representative (`EditRepresentative`)
- Editable card for modifying representative details.
- Includes cancel and save actions.

#### Election Detail (`ElectionDetail`)
- Displays detailed information about an election.
- Shows assigned representatives and their votes.

### Services

#### `electionService`
- Handles API calls related to elections, such as retrieving election details and representatives.

#### Representative Repository (`createRepresentativeRepository`)
- Provides methods for interacting with the representatives database.

### Database
- A centralized database (`db`) is used to manage elections and representatives.
- Repositories abstract data access logic for scalability.

## How to Run the Project

### Prerequisites
- Node.js installed on your system.
- A database connection configured in the `db` file.

### Steps
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000`.

## Deployment
- The application can be deployed using platforms like Vercel or Netlify.
- Ensure the database connection is properly configured for production.

## Future Enhancements
- Implement authentication for secure access.
- Add search and filter functionality for representatives and elections.
- Provide analytics and reporting for election results.
- Optimize performance for handling large datasets.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact
For any queries, please reach out to the project maintainer at [Leo@swederus.se](mailto:Leo@swederus.se).

GitHub: [Swederus](https://github.com/Swederus)

