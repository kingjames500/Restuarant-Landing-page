# Collaboration Guide for Restaurant Landing Page Project

## Project Overview

We are a team of five tasked with creating a restaurant landing page. Each member will be responsible for one component of the page. The components are as follows:

- Footer and Our story & Services - Salad
- About Us
-  Header
- Menu
- Testimonials

## Collaboration Tools

We will use the following tools to collaborate effectively:

- **GitHub**: For version control and code collaboration.

## GitHub Workflow

1. **Repository Setup**: One member will create a GitHub repository and invite the other members as collaborators. Kingjames has been tasked with this.
2. **Cloning the Repository**: Each member should clone the repository to their local machine using the command:
   ```bash
   git clone https://github.com/kingjames500/Restuarant-Landing-page.git
   ```
3. **Branching Strategy**: Each member will create a branch for their component. For example, `feature/hero-githubusername`, `feature/about-us-kingjames`, etc. Use the following command to create and switch to a new branch:
   ```bash
   git checkout -b feature/branch-name-githubusername
   ```
4. **Making Changes**: Implement your component and commit your changes with descriptive messages:
   ```bash
   git add .
   git commit -m "Add hero section"
   ```
5. **Pushing Changes**: Push your branch to the remote repository:
   ```bash
   git push origin feature/branch-name-githubusername
   ```
6. **Pull Requests**: Once a component is complete, the member will create a pull request to merge their branch into the `main` branch. Navigate to the repository on GitHub, go to the "Pull requests" tab, and click "New pull request".
7. **Code Reviews**: Each member should review at least one pull request from another member to ensure code quality and consistency. Provide feedback and approve the pull request if everything looks good.

## Component Responsibilities

### This is an example of how you will be creating components

- **Hero**: [Member Name]

  - Design and implement the hero section with a catchy headline and call-to-action button.
  - Create a component named `Hero` and add the content of the hero section there.
  - Import the `Hero` component into `App.jsx` and render it.

  ```javascript
  // Hero.jsx
  import React from "react";

  const Hero = () => {
    return (
      <div>
        <h1>Welcome to Our Restaurant</h1>
        <button>Order Now</button>
      </div>
    );
  };

  export default Hero;
  ```

  ```javascript
  // App.jsx
  import React from "react";
  import Hero from "./Hero";

  const App = () => {
    return (
      <div>
        <Hero />
        {/* Other components will be added here */}
      </div>
    );
  };

  export default App;
  ```

- **Hero**: [Member Name]
  - Design and implement the hero section with a catchy headline and call-to-action button.
- **About Us**: [Member Name]
  - Create a section that describes the restaurant's history, mission, and values.
- **Footer & Header**: [Member Name]
  - Develop a consistent header and footer for navigation and contact information.
- **Menu**: [Member Name]
  - Design a section to display the restaurant's menu items with descriptions and prices.
- **Testimonials**: [Member Name]
  - Implement a section to showcase customer testimonials and reviews.

## Deadlines

- **Initial Setup**: 22/11/2024
- **Component Development**: 22/11/2024 - 24/11/2024
- **Code Review and Testing**: 25/11/2024
- **Final Integration**: 24/11/2024

Let's work together to create an amazing restaurant landing page!
