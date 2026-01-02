![Shield Inc Banner](https://github.com/supunxiii/supunxiii/blob/7653f59dcf38771e7791a1cc0795c9d6b4cdcd3c/user-interfaces/shield-inc/shield-ui-1.png)

## Overview

Shield Inc is a mobile-responsive Progressive Web Application (PWA) developed for the COMP50011-K-II - Mobile Application Development II module. It presents a multi-page insurance platform with responsive layouts, accessible navigation, and offline support. The experience spans product highlights, company information, branch discovery, careers, and a 'My Shield' area that captures user input and syncs data via Firebase.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=flat-square&logo=javascript&logoColor=F7DF1E)
![Materialize 1.0.0](https://img.shields.io/badge/Materialize-1.0.0-EE6E73?style=flat-square&logo=materialdesign&logoColor=white)
![jQuery 3.7.0](https://img.shields.io/badge/jQuery-3.7.0-0769AD?style=flat-square&logo=jquery&logoColor=white)
![SwiperJS 10.3](https://img.shields.io/badge/SwiperJS-10.3-6332F6?style=flat-square&logo=swiper&logoColor=white)
![Node](https://img.shields.io/badge/Node%20js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white)
![Firebase 10.3.1](https://img.shields.io/badge/Firebase-10.3.1-FFCA28?style=flat-square&logo=firebase&logoColor=black)
![Font%20Awesome 6](https://img.shields.io/badge/Font%20Awesome-6-528DD7?style=flat-square&logo=fontawesome&logoColor=white)
![Progressive Web App](https://img.shields.io/badge/PWA-Enabled-5A0FC8?style=flat-square&logo=pwa&logoColor=white)

## Features

Shield Inc provides the following features:

1. **Mobile-first PWA Delivery**

    - PWA configuration with `manifest.json` and service worker caching
    - Optimised media assets to keep load times fast and smooth
    - Orientation-aware layout supporting portrait and landscape

2. **Multi-screen Navigation**

    - Seven primary screens (Home, About, Products, Contact, Branches, My Shield, Careers)
    - Additional offline fallback and mini-game experience (Sheep)
    - Clear navigation across desktop and mobile breakpoints

3. **User-friendly Interface Design**

    - Material Design styling via Materialize
    - Legible typography and spacing for mobile readability
    - Organised content with meaningful copy and no placeholder text

4. **Offline Support**

    - Static and dynamic caching strategy in `sw.js`
    - Fallback UI for offline HTML requests
    - Cached external assets for a resilient offline experience

5. **Interactive Data Handling**

    - Contact form submission via Formspree
    - Firebase Auth + Firestore for My Shield suggestions
    - Local storage-based scoring for the Sheep mini-game

## Technologies Used

-   **HTML5**: Structure (static HTML pages)
-   **CSS3**: Styling and responsive layout
-   **JavaScript**: Interactivity, PWA logic, and data handling
-   **Materialize CSS 1.0.0**: UI framework (from `css/materialize.min.css`)
-   **Material Icons (Google)**: Icon font (loaded via CDN)
-   **Google Fonts**: Typography families loaded via CDN
-   **jQuery 3.7.0**: DOM utilities (from CDN in HTML)
-   **SwiperJS 10.3**: Carousel/slider (loaded via CDN)
-   **Firebase 10.3.1**: Auth + Firestore (from `pages/my-shield.html`)
-   **Formspree API**: Contact form handling (from `pages/contact.html`)
-   **Font Awesome 6**: Icon set (loaded via kit)

## Project Specifications

-   **Course**: COMP50011-K-II - Mobile Application Development II
-   **Application Type**: Mobile-responsive Progressive Web Application (PWA)
-   **Offline Support**: Service worker caching and fallback UI
-   **Data Handling**: Firebase integration + Formspree + local storage

## User Interfaces

### UIs

![Shield Inc UI 1](https://github.com/supunxiii/supunxiii/blob/7653f59dcf38771e7791a1cc0795c9d6b4cdcd3c/user-interfaces/shield-inc/shield-ui-2.png)

### UIs

![Shield Inc UI 2](https://github.com/supunxiii/supunxiii/blob/7653f59dcf38771e7791a1cc0795c9d6b4cdcd3c/user-interfaces/shield-inc/shield-ui-3.png)

### UIs

![Shield Inc UI 3](https://github.com/supunxiii/supunxiii/blob/7653f59dcf38771e7791a1cc0795c9d6b4cdcd3c/user-interfaces/shield-inc/shield-ui-4.png)

### UIs

![Shield Inc UI 4](https://github.com/supunxiii/supunxiii/blob/7653f59dcf38771e7791a1cc0795c9d6b4cdcd3c/user-interfaces/shield-inc/shield-ui-5.png)

### UIs

![Shield Inc UI 5](https://github.com/supunxiii/supunxiii/blob/7653f59dcf38771e7791a1cc0795c9d6b4cdcd3c/user-interfaces/shield-inc/shield-ui-6.png)

### UIs

![Shield Inc UI 6](https://github.com/supunxiii/supunxiii/blob/7653f59dcf38771e7791a1cc0795c9d6b4cdcd3c/user-interfaces/shield-inc/shield-ui-7.png)

### UIs

![Shield Inc UI 7](https://github.com/supunxiii/supunxiii/blob/7653f59dcf38771e7791a1cc0795c9d6b4cdcd3c/user-interfaces/shield-inc/shield-ui-8.png)

## Getting Started

To run Shield Inc locally, follow these steps:

1. Clone the repository:

    ```shell
    git clone https://github.com/supunxiii/shield-inc.git
    ```

2. Navigate to the project directory:

    ```shell
    cd shield-inc
    ```

3. Start a local web server (required for service worker support):

    ```shell
    python3 -m http.server 8080
    ```

4. Open the site in your browser:

    ```
    http://localhost:8080/index.html
    ```

## Project Structure

```
shield-inc/
├── css/                              # Page-specific styles and Materialize
├── images/                           # UI imagery, icons, and logos
├── js/                               # App scripts and feature logic
├── pages/                            # Additional screens
├── index.html                        # Landing page
├── manifest.json                     # PWA manifest
├── sw.js                             # Service worker
└── LICENSE                           # Licence
```

## Developer

This project was developed by:

- **Supun Wijesooriya** - Developer

## Live Demo

The website is currently live at: [https://shield-inc-13.firebaseapp.com/index.html](https://shield-inc-13.firebaseapp.com/index.html)

## Contributing

Contributions are welcome. If you would like to contribute:

1. Fork the repository.
2. Create a new branch:

    ```shell
    git checkout -b feature/your-feature-name
    ```

3. Commit your changes:

    ```shell
    git commit -m "Add your commit message"
    ```

4. Push your branch:

    ```shell
    git push origin feature/your-feature-name
    ```

5. Open a pull request with a clear description of your changes.

## License

This project is open-source and is licensed under the [MIT License](LICENSE).

## Contact

For any enquiries or feedback, please contact the developer:

-   **Supun Wijesooriya**: [GitHub Profile](https://github.com/supunxiii)
-   **Project Repository**: [shield-inc](https://github.com/supunxiii/shield-inc)

---

_Designed and developed in September 2023_
