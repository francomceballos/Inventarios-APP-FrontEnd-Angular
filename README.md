# Angular Frontend for Inventory Management

This project is the frontend interface for an inventory management system built with Angular. It communicates with a backend API to manage products and inventory data.

## Features

- **User Interface**: Provides a responsive UI for managing products.
- **CRUD Operations**: Allows users to Create, Read, Update, and Delete products.
- **Integration**: Integrates with the backend API for data exchange.

## Technologies Used

- **Angular**: Framework for building single-page applications.
- **Bootstrap**: Frontend component library for responsive design.
- **Angular CLI**: Command-line interface for Angular development.

## Prerequisites

Before running the application locally, make sure you have the following installed:

- Node.js (Recommended version)
- Angular CLI

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/inventory-management-frontend.git
   cd inventory-management-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
```bash
ng serve
```
## Build

Run `ng build` to build the project. The build artifacts will be stored in the dist/ directory.
```bash
ng build
```

## Usage

Before starting the frontend, ensure that the backend server is running. You need the backend API to be accessible at `http://localhost:8080/inventario-app` for full functionality.

Once both servers are running:

    Open your browser and navigate to http://localhost:4200/.
    Interact with the interface to manage products.

Remember you need to run the backend for it to work

## Contributions are welcome! If you want to contribute to this project, follow these steps:

    Fork the repository on GitHub.
    Create a new branch (git checkout -b feature/new-feature).
    Make necessary changes and commit (git commit -am 'Add new feature').
    Push to the branch (git push origin feature/new-feature).
    Create a new Pull Request.

License

This project is licensed under the MIT License. See the LICENSE file for details.
