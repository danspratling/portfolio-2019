<h1 align="center">
  Black Box - Portfolio Theme
</h1>

A Minimalist Gatsby website designed to be used as a template for portfolio websites

Features:

- Kickass page templates
- Sleek yet simple animations
- Everything you need to start your own portfolio
- And a blog (everyone needs a blog!)

Built with: Gatsby, TailwindCSS, Contentful
(I've tried to make it as easy as possible to replace data across the website).

## Prelude

This project is built using Gatsby. If you aren't familiar with Gatsby [you can read the documentation](https://www.gatsbyjs.com/docs/).

Styling is handled using utility classes from Tailwind CSS. [You can learn about that here](https://tailwindcss.com/).

Data is managed using Contentful. Currently, that repo is private (meaning you won't be able to see any data when you fork). You'll need to swap out the GraphQL queries for your chosen CMS, use markdown, or inline it. I'll working on improving the experience in the future.

## 🧵 Install

1.  **Download the project**

    Use the Gatsby CLI to clone the site

    ```shell
    gatsby new my-portfolio https://github.com/danspratling/portfolio
    ```

1.  **Start developing**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-portfolio
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    The same as all other Gatsby projects, your site will now be running on `http://localhost:8000`!

    It should look exactly like the demo website `https://danspratling.netlify.app`

    As always, you can see the data associated with the project with graphql `http://localhost:8000/__graphql`

## 👩‍💻 Update

Before updating, you'll need to find your way around.

    .
    ├── node_modules
    ├── src
    ├── static
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    ├── README.md
    ├── tailwind.config.js
    └── yarn.lock

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`/static`**: This directory will contain all This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`.prettierignore` && `.prettierrc`**: Configuration files for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1.  **`LICENSE`**: Gatsby is licensed under the MIT license, and so is this starter. Use it however you'd like. Just... don't forget to take out the default information.

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1.  **`README.md`**: A text file containing useful reference information about your project.

1.  **`tailwind.config.js`** A config file for setting up tailwind utility classes.

1.  **`yarn.lock`** (See `package.json` first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. I use yarn to handle dependencies, but if you use npm this file will be replaced with an auto-generated `package-lock.json`. **(You won’t change this file directly).**

## 🦄 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/danspratling/portfolio)

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/danspratling/portfolio)
