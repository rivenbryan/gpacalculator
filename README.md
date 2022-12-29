# GPA Calculator

This is a simple web application built with React.js that allows users to calculate their GPA. 
It uses Firebase as the backend service and Material-UI for styling.

## Installation

To get started, clone the repository and install the dependencies:

git clone https://github.com/[your-username]/react-app-with-firebase.git
cd react-app-with-firebase
npm install

Next, create a `src/firebase.js` file and include your Firebase project's API keys. You can find these keys in the Firebase console under the "Project Settings" > "General" tab.

``javascript
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
  measurementId: 'YOUR_MEASUREMENT_ID'
};

firebase.initializeApp(firebaseConfig);

export default firebase;

## Usage

To start the development server, run:

The app will be available at http://localhost:3000.

To build the production version of the app, run:

npm run build

## Features

- Enter the number of credit hours and letter grade for each course to calculate your GPA.
- View your overall GPA as well as GPA by semester.

## Future Plans

- Allow users to save and track multiple semesters.
- Add support for weighted GPAs.

## Credits

- [React.js](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
