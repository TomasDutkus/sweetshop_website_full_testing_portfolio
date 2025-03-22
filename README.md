# 🚀 Sweet Shop - Cypress Testing

## 📌 Overview

This project is designed to automate various testing scenarios using **Cypress** for end-to-end testing and **GitHub Actions** for CI/CD workflows. It ensures software quality, efficiency, and reliability through automated browser testing.

## ✨ Features

- ✅ **End-to-End Testing**: Automates UI interactions to validate application functionality.
- 🔄 **GitHub Actions Integration**: Triggers Cypress tests on code changes.
- 🔍 **Continuous Integration (CI)**: Ensures stability before merging.
- 🌎 **Cross-Browser Testing**: Supports multiple browsers for compatibility.
- 🛠 **Customizable Test Suites**: Modify test scripts to match project needs.

## 🛠 Technologies Used

- 🟢 **Cypress** (for UI automation)
- ⚙️ **GitHub Actions** (for automation and CI/CD)
- 🖥 **Node.js** (for running Cypress tests)

## 🚀 Getting Started

### 🔹 Prerequisites

- 📂 GitHub account with repository access
- 🖥 Node.js installed on your local machine
- 📦 npm (Node Package Manager) installed

### 🔹 Installation

1. Clone the repository:
   ```
   git clone https://github.com/TomasDutkus/sweetshop_website_full_testing_portfolio
   ```
2. Navigate to the project directory:
   ```
   cd sweetshop_website_full_testing_portfolio
   ```
3. Install dependencies:
   ```
   npm install
   ```
   ```
   npm install cypress --save-dev
   ```

## 🏃 Running Cypress Tests

### ▶️ Manually (Local Execution)

Run Cypress tests locally using:

```
npx cypress open  # Opens Cypress Test Runner
```

Or, to run tests in headless mode:

```
npx cypress run
```

### ▶️ Using GitHub Actions

Push changes to the repository, and the CI pipeline will automatically execute Cypress tests.

## 🔄 GitHub Actions Workflow

This project includes a workflow for:

- 🚦 **CI Testing**: Runs Cypress tests on every push and pull request.
- ✅ **Build Validation**: Ensures all UI functionalities work before deployment.

## 🤝 Contribution Guidelines

1. 🔀 Fork the repository.
2. 🌿 Create a new branch: `git checkout -b feature-branch`.
3. ✍️ Commit changes: `git commit -m "Add new Cypress test"`.
4. 📤 Push to the branch: `git push origin feature-branch`.
5. 🔎 Open a **Pull Request** for review.

## 📜 License

This project is licensed under the **MIT License**.

---

**👤 Author:** Tomas Dutkus  
📧 **Contact:** tomasdutkus@gmail.com  
🔗 **GitHub:** [TomasDutkus](https://github.com/TomasDutkus)
