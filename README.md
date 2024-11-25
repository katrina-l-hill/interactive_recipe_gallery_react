# Building an Interactive Recipe Gallery with React

## Author: Katrina Hill

### Description
A React-based image gallery application that displays a list of recipe images. Users can navigate through the images using "Next" and "Previous" buttons.

### Features
- Displays a recipe image and its description based on the current index.
- Users can navigate between images using "Next" and "Previous" buttons.
- The navigation buttons are disabled when the user reaches the first or last image.

### Files
- **`Gallery.js`**: Describes the main component responsible for rendering the gallery and handling user interactions (next/previous image).
- **`imageList.js`**: Describes the file that holds the image data in the form of an array of objects. This array is imported into `Gallery.js` to display the images and their descriptions.
- **`App.test.js`**: contains the test cases for verifying the functionality and behavior of the `Gallery`, `imageList`, and `App` components.

### How to Run
- clone the repository: https://github.com/katrina-l-hill/interactive_recipe_gallery_react
- cd in the project directory: `interactive-recipe-gallery`
- run `npm install` to install the dependencies
- run `npm start` to launch the app in the browser
