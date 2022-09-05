<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/Devansh-365/notify">
    <img src="./public/images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Notify</h3>

  <p align="center">
    Notification System thats generate toasts of various type like info, success, error & warning without using dependencies. User can generate customize toasts for there project.
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#demonstration">Demonstration</a></li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

- Notification System thats generate toasts of various type like info, success, error & warning without using dependencies. User can generate customize toasts for there project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Follow the instructions to set up the project on your local machine

### Prerequisites

Install NodeJS LTS

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Fork the repo(required), a star is also appretiated but optional :P
2. Clone the repo
   ```sh
   git clone https://github.com/Devansh-365/notify.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start the project
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Demonstration

![product-screenshot]



<br />

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Folder Structure

```
notification-system
├─ .eslintrc.json
├─ .gitignore
├─ components
│  ├─ Toast
│  │  ├─ index.jsx      // component for toast notification
│  │  └─ toast.module.css       // styles for toast notification   
│  └─ ToastPortal
│     ├─ index.jsx      // component loads & customize toasts notification
│     └─ toastPortal.module.css     // styles for array of toasts generated
├─ helpers
│  └─ getId.js      // generate random id for toast generated
├─ hooks
│  ├─ useToastAutoClose.js      // used to automatically close the toast
│  └─ useToastPortal.js     // used to add div element for toast
├─ next.config.js
├─ package.json
├─ pages
│  ├─ api
│  │  └─ hello.js
│  ├─ index.js      // home page of our project where user can generate toasts
│  └─ _app.js
├─ public
│  ├─ favicon.ico
│  ├─ fonts
│  │  ├─ Rubik-Medium.ttf
│  │  └─ Rubik-Regular.ttf
│  ├─ images
│  │  ├─ alertCircle.svg
│  │  └─ x.svg
│  └─ vercel.svg
├─ README.md
├─ styles
│  ├─ globals.css
│  └─ Home.module.css       // styles for gome page
└─ yarn.lock

```

<br />

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Your Name - devanshtiwari365@gmail.com

Project Link: [https://github.com/Devansh-365/realEstate-project](https://github.com/Devansh-365/realEstate-project)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot]: ./public/images/screenshot.png
[product-screenshotii]: ./public/images/screenshotii.png
[product-screenshotiii]: ./public/images/screenshotiii.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/