# JobIt

[![Latest release](https://img.shields.io/github/v/release/aregtech/areg-sdk?label=Latest%20release&style=social)](https://jsmastery.pro)
[![GitHub commits](https://img.shields.io/github/commits-since/aregtech/areg-sdk/v1.5.0.svg?style=social)](https://jsmastery.pro)
[![Stars](https://img.shields.io/github/stars/aregtech/areg-sdk?style=social)](https://jsmastery.pro)
[![Fork](https://img.shields.io/github/forks/aregtech/areg-sdk?style=social)](https://jsmastery.pro)

![demo](https://i.ibb.co/92kyj7N/Thumb.png)

![contributions](https://img.shields.io/badge/all_contributors-619-orange.svg)
![release](https://img.shields.io/github/release/charmbracelet/vhs.svg)
![PRs](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=shields)
[![website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](website)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🌐 Demo
Here is a working live demo:  https://cohort3-coding-crew-job-it.vercel.app/

## 📝 Description
Welcome to my project! Here, I'll provide you with a brief overview of what inspired me to create it, why it solves a problem, and what I've learned throughout its development.
- Motivation: I was motivated to build this project to address a specific issue and to enhance my coding skills.
- Why I Built This Project: My main goal was to create a practical and user-friendly solution to a real-world problem.
- Problem Solved: This project aims to simplify a particular task, making it more efficient and accessible.
- What I Learned: Throughout the development process, I gained valuable insights into various technologies and programming concepts.


## 📖 Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## 🛠️ Setup Project
To get this project up and running in your development environment, follow these step-by-step instructions.

### 🍴 Prerequisites

We need to install or make sure that these tools are pre-installed on your machine:

- [NodeJS](https://nodejs.org/en/download/): It is a JavaScript runtime build. 
- [Git](https://git-scm.com/downloads): It is an open source version control system. 
- [Medusa CLI](https://docs.medusajs.com/quickstart/quick-start): It will be used while running the medusa server on the local machine.
- [Discord Webhook](https://www.youtube.com/watch?v=fKksxz2Gdnc): Setup a webhook integration on your discord server.
- [Redis](https://docs.medusajs.com/tutorial/set-up-your-development-environment): Redis is an in-memory data structure store and message broker.

## ✨ Features

If your project has a lot of features, list them here.

### 🚀 Install Project

1. Clone the Repository

```bash
git clone https://github.com/surajondev/medusa-discord-integration.git
```

2. Install packages in the `/backend/` and `/storefront/` directory

```
npm install
```

3. In the `/backend` create a `.env` file add the discord webhook URL

```bash
DISCORD_WEBHOOK_URL="WEBHOOK URL"
```

4. Run the server, storefront and the redis server.

For server from `/backend/`:
```bash
npm run start
```

For storefront from `/storefront/`
```bash
npm run dev
```

For Redis:
```bash
sudo service redis-server start
```

## 🔍 Usage

### How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/username/projectname

# Go into the repository
$ cd projectname

# Install dependencies
$ npm install

# Run the app
$ npm start
```

> **Note**
> If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

### ⚒️ How to Contribute
Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request 

### 📩 Bug / Feature Request

If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue [here](https://github.com/username/projectname/issues/new) by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/username/projectname/issues/new). Please include sample queries and their corresponding results.

## ✅ To-do
- [ ] Enable users to save jobs to their favorites list.
- [x] Allow users to apply to a job directly from the app.
- [ ] Provide a simple and intuitive user interface for easy navigation.
- [ ] Allow users to filter jobs based on job title, location, or company.

## 🔒 ENV file
Environment variables[^2] can be used for configuration. They must be set before
`job init` is called.
- `JOB_API`
  - Specifies the directory in which the database is stored.
- This is provided as a list of [globs][glob], separated by OS-specific
    characters:
    | OS                  | Separator | Example                 |
    | ------------------- | --------- | ----------------------- |
    | Linux / macOS / BSD | `:`       | `$HOME:$HOME/private/*` |
    | Windows             | `;`       | `$HOME;$HOME/private/*` |
- By default, this is set to `"$HOME"`.

## 📜 Credits
List your collaborators, if any, with links to their GitHub profiles.

I'd like to acknowledge my collaborators, who contributed to the success of this project. Below are links to their GitHub profiles.

Furthermore, I utilized certain third-party assets that require attribution. Find the creators' links in this section.

If I followed tutorials during development, I'd include the links to those as well.

👩 Jane Doe <br>
Email: jane.doe@example.com <br>
GitHub: @janedoe

👦 John Smith <br>
Email: john.smith@example.com <br>
GitHub: @johnsmith

👩 Emily Johnson <br>
Email: emily.johnson@example.com <br>
GitHub: @emilyjohnson

👦 Michael Brown  <br>
Email: michael.brown@example.com <br>
GitHub: @michaelbrown


## 📚 References
Jonathan Lee, 'Notes on Naive Bayes Classifiers for Spam Filtering'. [Online].

## 📞 Contact Us

[![Follow us on twitter](https://img.shields.io/twitter/follow/jsmasterypro.svg?style=social)](https://twitter.com/intent/follow?screen_name=jsmasterypro) 
[![Follow us on LinkedIn](https://img.shields.io/badge/LinkedIn-javascriptmastery-blue?style=flat&logo=linkedin&logoColor=b0c0c0&labelColor=363D44)](https://www.linkedin.com/company/javascriptmastery)
[![Follow us on Instagram](https://img.shields.io/badge/Instagram-javascriptmastery-grey?style=flat&logo=instagram&logoColor=b0c0c0&labelColor=8134af)](https://www.instagram.com/javascriptmastery)

## 📋 License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to https://choosealicense.com/.
