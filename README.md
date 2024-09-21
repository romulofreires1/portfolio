# [Em construção] Portifolio Project

Welcome to my portifolio project! This README provides a step-by-step guide to get you set up and running with the project locally. By following these instructions, you can explore how to utilize modern web technologies like React and Next.js.

https://portifolio-romulofreires.vercel.app

## Getting Started

Below are the instructions to clone the repository and set up the project on your local machine.

### Prerequisites

Ensure you have the following installed:

- Git
- Yarn

### Setup Instructions

1. **Clone the Repository**
   To get started, open your terminal and navigate to the directory where you want to clone the repository. Execute the following command:

   ```bash
   git clone https://github.com/romulofreires1/portifolio.git
   ```

2. **Navigate to the Project Directory**
   Change into the project directory with:

   ```bash
   cd portifolio
   ```

3. **Install Dependencies**
   Install all the required dependencies using Yarn:

   ```bash
   yarn install
   ```

4. **Run the Project**
   Launch the development server:
   ```bash
   yarn dev
   ```
   After running the command, you should be able to access the project at `http://localhost:3000` on your browser.

## Technologies Used

This project leverages some of the most popular frameworks and libraries in web development:

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for production which provides Hybrid Static & Server Rendering, and route pre-fetching, amongst other things.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **TypeScript**: A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- **i18next**: Management of translation content, and components/hooks to translate your React components.


## Incremental Static Regeneration (ISR)

This project uses ISR to fetch a [JSON gist](https://gist.githubusercontent.com/romulofreires1/1f3ec8357c940943174fcb4a38c3d3d4/raw/portifolio-structure-ptbr.json). This allows key information on the site to be updated without requiring a full deploy. The data is fetched from a GitHub Gist URL, which is then used to populate the content dynamically.

Enjoy building and customizing your portifolio!
