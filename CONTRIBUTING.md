<<<<<<< HEAD
# Contribution Guidelines

Welcome! This guide provides all the details you need to contribute effectively to the project. Thank you for helping us make **bolt.diy** a better tool for developers worldwide. 💡

---

## 📋 Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [How Can I Contribute?](#how-can-i-contribute)
3. [Pull Request Guidelines](#pull-request-guidelines)
4. [Coding Standards](#coding-standards)
5. [Development Setup](#development-setup)
6. [Testing](#testing)
7. [Deployment](#deployment)
8. [Docker Deployment](#docker-deployment)
9. [VS Code Dev Containers Integration](#vs-code-dev-containers-integration)

---

## 🛡️ Code of Conduct

This project is governed by our **Code of Conduct**. By participating, you agree to uphold this code. Report unacceptable behavior to the project maintainers.

---

## 🛠️ How Can I Contribute?

### 1️⃣ Reporting Bugs or Feature Requests

- Check the [issue tracker](#) to avoid duplicates.
- Use issue templates (if available).
- Provide detailed, relevant information and steps to reproduce bugs.

### 2️⃣ Code Contributions

1. Fork the repository.
2. Create a feature or fix branch.
3. Write and test your code.
4. Submit a pull request (PR).

### 3️⃣ Join as a Core Contributor

Interested in maintaining and growing the project? Fill out our [Contributor Application Form](https://forms.gle/TBSteXSDCtBDwr5m7).

---

## ✅ Pull Request Guidelines

### PR Checklist

- Branch from the **main** branch.
- Update documentation, if needed.
- Test all functionality manually.
- Focus on one feature/bug per PR.

### Review Process

1. Manual testing by reviewers.
2. At least one maintainer review required.
3. Address review comments.
4. Maintain a clean commit history.

---

## 📏 Coding Standards

### General Guidelines

- Follow existing code style.
- Comment complex logic.
- Keep functions small and focused.
- Use meaningful variable names.

---

## 🖥️ Development Setup

### 1️⃣ Initial Setup

- Clone the repository:
  ```bash
  git clone https://github.com/stackblitz-labs/bolt.diy.git
  ```
- Install dependencies:
  ```bash
  pnpm install
  ```
- Set up environment variables:
  1. Rename `.env.example` to `.env.local`.
  2. Add your API keys:
     ```bash
     GROQ_API_KEY=XXX
     HuggingFace_API_KEY=XXX
     OPENAI_API_KEY=XXX
     ...
     ```
  3. Optionally set:
     - Debug level: `VITE_LOG_LEVEL=debug`
     - Context size: `DEFAULT_NUM_CTX=32768`

**Note**: Never commit your `.env.local` file to version control. It’s already in `.gitignore`.

### 2️⃣ Run Development Server

=======
# Contributing to bolt.diy

First off, thank you for considering contributing to bolt.diy! This fork aims to expand the capabilities of the original project by integrating multiple LLM providers and enhancing functionality. Every contribution helps make bolt.diy a better tool for developers worldwide.

## 📋 Table of Contents
- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Coding Standards](#coding-standards)
- [Development Setup](#development-setup)
- [Deploymnt with Docker](#docker-deployment-documentation)
- [Project Structure](#project-structure)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### 🐞 Reporting Bugs and Feature Requests
- Check the issue tracker to avoid duplicates
- Use the issue templates when available
- Include as much relevant information as possible
- For bugs, add steps to reproduce the issue

### 🔧 Code Contributions
1. Fork the repository
2. Create a new branch for your feature/fix
3. Write your code
4. Submit a pull request

### ✨ Becoming a Core Contributor
We're looking for dedicated contributors to help maintain and grow this project. If you're interested in becoming a core contributor, please fill out our [Contributor Application Form](https://forms.gle/TBSteXSDCtBDwr5m7).

## Pull Request Guidelines

### 📝 PR Checklist
- [ ] Branch from the main branch
- [ ] Update documentation if needed
- [ ] Manually verify all new functionality works as expected
- [ ] Keep PRs focused and atomic

### 👀 Review Process
1. Manually test the changes
2. At least one maintainer review required
3. Address all review comments
4. Maintain clean commit history

## Coding Standards

### 💻 General Guidelines
- Follow existing code style
- Comment complex logic
- Keep functions focused and small
- Use meaningful variable names
- Lint your code. This repo contains a pre-commit-hook that will verify your code is linted properly, 
so set up your IDE to do that for you!

## Development Setup

### 🔄 Initial Setup
1. Clone the repository:
```bash
git clone https://github.com/coleam00/bolt.new-any-llm.git
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
   - Rename `.env.example` to `.env.local`
   - Add your LLM API keys (only set the ones you plan to use):
```bash
GROQ_API_KEY=XXX
HuggingFace_API_KEY=XXX
OPENAI_API_KEY=XXX
ANTHROPIC_API_KEY=XXX
...
```
   - Optionally set debug level:
```bash
VITE_LOG_LEVEL=debug
```

   - Optionally set context size:
```bash
DEFAULT_NUM_CTX=32768
```

Some Example Context Values for the qwen2.5-coder:32b models are.
 
* DEFAULT_NUM_CTX=32768 - Consumes 36GB of VRAM
* DEFAULT_NUM_CTX=24576 - Consumes 32GB of VRAM
* DEFAULT_NUM_CTX=12288 - Consumes 26GB of VRAM
* DEFAULT_NUM_CTX=6144 - Consumes 24GB of VRAM

**Important**: Never commit your `.env.local` file to version control. It's already included in .gitignore.

### 🚀 Running the Development Server
>>>>>>> 48d3b799435c5f563650cf3ade719ed99182eb8e
```bash
pnpm run dev
```

<<<<<<< HEAD
**Tip**: Use **Google Chrome Canary** for local testing.

---

## 🧪 Testing
=======
**Note**: You will need Google Chrome Canary to run this locally if you use Chrome! It's an easy install and a good browser for web development anyway.

## Testing
>>>>>>> 48d3b799435c5f563650cf3ade719ed99182eb8e

Run the test suite with:

```bash
pnpm test
```

<<<<<<< HEAD
---

## 🚀 Deployment

### Deploy to Cloudflare Pages
=======
## Deployment

To deploy the application to Cloudflare Pages:
>>>>>>> 48d3b799435c5f563650cf3ade719ed99182eb8e

```bash
pnpm run deploy
```

<<<<<<< HEAD
Ensure you have required permissions and that Wrangler is configured.

---

## 🐳 Docker Deployment

This section outlines the methods for deploying the application using Docker. The processes for **Development** and **Production** are provided separately for clarity.

---

### 🧑‍💻 Development Environment

#### Build Options

**Option 1: Helper Scripts**
=======
Make sure you have the necessary permissions and Wrangler is correctly configured for your Cloudflare account.

# Docker Deployment Documentation

This guide outlines various methods for building and deploying the application using Docker.

## Build Methods

### 1. Using Helper Scripts

NPM scripts are provided for convenient building:
>>>>>>> 48d3b799435c5f563650cf3ade719ed99182eb8e

```bash
# Development build
npm run dockerbuild
<<<<<<< HEAD
```

**Option 2: Direct Docker Build Command**

```bash
docker build . --target bolt-ai-development
```

**Option 3: Docker Compose Profile**

```bash
docker-compose --profile development up
```

#### Running the Development Container

```bash
docker run -p 5173:5173 --env-file .env.local bolt-ai:development
```

---

### 🏭 Production Environment

#### Build Options

**Option 1: Helper Scripts**

```bash
=======

>>>>>>> 48d3b799435c5f563650cf3ade719ed99182eb8e
# Production build
npm run dockerbuild:prod
```

<<<<<<< HEAD
**Option 2: Direct Docker Build Command**

```bash
docker build . --target bolt-ai-production
```

**Option 3: Docker Compose Profile**

```bash
docker-compose --profile production up
```

#### Running the Production Container

```bash
docker run -p 5173:5173 --env-file .env.local bolt-ai:production
```

---

### Coolify Deployment

For an easy deployment process, use [Coolify](https://github.com/coollabsio/coolify):

1. Import your Git repository into Coolify.
2. Choose **Docker Compose** as the build pack.
3. Configure environment variables (e.g., API keys).
4. Set the start command:
   ```bash
   docker compose --profile production up
   ```

---

## 🛠️ VS Code Dev Containers Integration

The `docker-compose.yaml` configuration is compatible with **VS Code Dev Containers**, making it easy to set up a development environment directly in Visual Studio Code.

### Steps to Use Dev Containers

1. Open the command palette in VS Code (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS).
2. Select **Dev Containers: Reopen in Container**.
3. Choose the **development** profile when prompted.
4. VS Code will rebuild the container and open it with the pre-configured environment.

---

## 🔑 Environment Variables

Ensure `.env.local` is configured correctly with:

- API keys.
- Context-specific configurations.

Example for the `DEFAULT_NUM_CTX` variable:

```bash
DEFAULT_NUM_CTX=24576 # Uses 32GB VRAM
```
=======
### 2. Direct Docker Build Commands

You can use Docker's target feature to specify the build environment:

```bash
# Development build
docker build . --target bolt-ai-development

# Production build
docker build . --target bolt-ai-production
```

### 3. Docker Compose with Profiles

Use Docker Compose profiles to manage different environments:

```bash
# Development environment
docker-compose --profile development up

# Production environment
docker-compose --profile production up
```

## Running the Application

After building using any of the methods above, run the container with:

```bash
# Development
docker run -p 5173:5173 --env-file .env.local bolt-ai:development

# Production
docker run -p 5173:5173 --env-file .env.local bolt-ai:production
```

## Deployment with Coolify

[Coolify](https://github.com/coollabsio/coolify) provides a straightforward deployment process:

1. Import your Git repository as a new project
2. Select your target environment (development/production)
3. Choose "Docker Compose" as the Build Pack
4. Configure deployment domains
5. Set the custom start command:
   ```bash
   docker compose --profile production up
   ```
6. Configure environment variables
   - Add necessary AI API keys
   - Adjust other environment variables as needed
7. Deploy the application

## VS Code Integration

The `docker-compose.yaml` configuration is compatible with VS Code dev containers:

1. Open the command palette in VS Code
2. Select the dev container configuration
3. Choose the "development" profile from the context menu

## Environment Files

Ensure you have the appropriate `.env.local` file configured before running the containers. This file should contain:
- API keys
- Environment-specific configurations
- Other required environment variables

## Notes

- Port 5173 is exposed and mapped for both development and production environments
- Environment variables are loaded from `.env.local`
- Different profiles (development/production) can be used for different deployment scenarios
- The configuration supports both local development and production deployment
>>>>>>> 48d3b799435c5f563650cf3ade719ed99182eb8e
