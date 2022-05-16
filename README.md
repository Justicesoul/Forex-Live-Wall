# Forex live wall

### You can find project page here => https://justicesoul.github.io/Forex-Live-Wall/

![Project GIF](src/assets/images/projectRecord.gif)

## Project architecture

The app has two instances for tickers of the two currencies. In these you can only enter Latin letters. You can change the direction of the search by pressing ⇄ button between two inputs. The currencies data updates every 10 seconds. There are 6 types of historical charts available, varying by time frames.

The application has mobile adaptive layout.

If you have "Data request limit reached for today" error, you can switch apyKey in ./src/assets/data.ts by change "index" variable (only 0-2 are available)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
