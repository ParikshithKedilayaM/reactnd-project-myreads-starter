# My Books Library Project
This is a personal online library project, where each user gets a collection of online books. The user can search for new books using the search and add feature into three distinct book shelves:

* Currently Reading
* Want to Read
* Read

The user can move the books between the book shelves using the dropdown options associated with each book. User can search for new books by clicking on the "+" symbol at the bottom of the page and typing search keywords. A list of books will be displayed and the user can click on dropdown button and select the book shelf to which the book has to be added. It's simple and elegant!

## Deployment Steps

To get started right away, clone this project to your computer and run the following commands:

* install all project dependencies with `npm install`
* start the development server with `npm start`

Your browser should pop-open with http://localhost:3000/ and you can see the application running. Since this application uses APIs from internet sources, the computer must be connected to the internet while you run the application.
If you do not have npm installed on your computer, follow this link to install: [Install npm](https://www.npmjs.com/get-npm).


## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

Special Thanks to Udacity React NanoDegree program for this wonderful opportunity to build this application.
