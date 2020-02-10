<p align="center">
  <a href="https://www.codeforlife.education">
    <img alt="Code for Life" src="https://pbs.twimg.com/profile_images/895959156770951169/e3mcfqLz_200x200.jpg" />
  </a>
</p>
<h1 align="center">
  Code for Life Teaching Resources
</h1>

This repo holds the website we use to generate teaching worksheets. The content is held in a CMS from [Contentful](https://www.contentful.com/) and we use [Gatsby](https://www.gatsbyjs.org/) to generate the webpages which will turn into worksheets when they are printed.

For more infomation on why we are doing this, please the corresponding [feature request on Github](https://github.com/ocadotechnology/codeforlife-portal/issues/1075).

## 🚀 Running the site locally

1.  **Clone the repo and install project dependencies**

    ```shell
    git clone https://github.com/ocadotechnology/codeforlife-teaching-resources.git
    
    # Installing dependencies here using yarn
    yarn install
    ```

1. **Get an API key for our Contentful instance and Puppeteer credentials**

    Contact @code-for-life on Slack to get an API key for the Contentful instance and Auth0 credentials for Puppeteer, and put them in a file called `.env.development`

    ```shell
    touch .env.development
    echo "CONTENTFUL_ACCESS_TOKEN=[your_contentful_api_key_here]" > .env.development
    echo "PUPPETEER_USERNAME=[your_puppeteer_username_here]" > .env.development
    echo "PUPPETEER_PASSWORD=[your_puppeteer_password_here]" > .env.development
    ```

1.  **Start the server**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd codeforlife-teaching-resources/
    yarn start
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `codeforlife-teaching-resources` directory in your code editor of choice and start editing. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: codeforlife-teaching-resources is licensed under the APGL-v3 license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.
