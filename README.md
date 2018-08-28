# Udacity Restaurant Review App (FEND)

The fifth project for the Udacity Front End Developer NanoDegree. Comprises the first part of the Mobile Web Specialist NanoDegree project of the same name.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for reviewing and testing out the application. For the FEND NanoDegree, only the first part of a three part project were required. Usage instructions are not much more than getting a Python server running, and point your browser to the required port.

### Prerequisites

Python 2 or 3 are required to run this web application. For Linux/Unix based systems, as well as MacOS, Python is usually included. Go to terminal and check your Python version by typing ```Python -V```.

For Windows based system, you can get the installer [here](https://www.python.org/downloads/windows/), and follow the instructions. Be sure with the Windows installer to add Python to your system Path, it will be an option when installing.

As a note, Udacity provided with a working project that was updated to ES6, the more modern version of JavaScript. For the most part, this means the application is best run in Chrome, FireFox or Edge browsers. Older versions if Internet Explorer (IE) may not display or function correctly.

### Options to view, download or clone the project:

Explain what these tests test and why

```
Give an example
```

### Starting the Server

These are simply the instruction Udacity provided below to get the application running on a simple Python based server, and then get it opened in a browser. Assuming Python is on your system Path, navigate to main folder of the project you downloaded or cloned above and do the following:

## Running the tests

Explain how to run the automated tests for this system


### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Chad Sisk** - *Initial work* - [chadwyck242](https://github.com/chadwyck242).
* Project code provided by Udacity as part of a NanoDegree requirement.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Mozilla Developer Network (MDN) Documentation and Tutorials
* Doug Brown MWS Stage 1 Tutorial [Doug Brown on YouTube](https://www.youtube.com/watch?v=92dtrNU1GQc)
* Udacity FEND Student Slack Group

## **Below are the original instructions provided by Udacity, for a more general idea as to what the project requirements were.**

# Mobile Web Specialist Certification Course
---
#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

### What do I do from here?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.

2. With your server running, visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.
3. Explore the provided code, and start making a plan to implement the required features in three areas: responsive design, accessibility and offline use.
4. Write code to implement the updates to get this site on its way to being a mobile-ready website.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.
