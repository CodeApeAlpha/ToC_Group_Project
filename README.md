# ToC_Group_Project
In this project a deterministic finite automaton (DFA) was designed and implemented to model UTech TOC Ultra Vehicle Control System (UTuvcs).

The UTuvcs start with the vehicle in the off position. If the vehicle is in the off position and it receives the brake-held signal, it moves into the hold position, otherwise, if the vehicle is in the off position and it receives the start signal, it moves into the ignition-on position. 
If the vehicle is in the hold position and it receives the start signal, it moves into the engine-started position. If the vehicle is in the ignition-on position and it receives the brake-held signal, it moves into the hold position, otherwise, if the vehicle is in the ignition-on position and it receives the start signal, it moves into the off position. 
If the vehicle is in the engine-started position and it receives the start signal, it moves into the off position, otherwise, if the vehicle is in the engine-started position and it receives the seat-belt-engaged signal, it moves into the stationary position. If the vehicle is in the stationary position and it receives the drive-selected signal, it moves into the in-forward-motion position and the speed is set to 1. 
If the vehicle is in the stationary position and it receives the accelerate signal, it remains in the stationary position. If the vehicle is in the stationary position and it receives the park-selected signal, it returns to the engine-started position. If the vehicle is in the stationary position and it receives the reverse-selected signal, it moves into the in-reverse-motion position and the speed is set to 1. 
If the vehicle is in the in-reverse-motion position and it receives the brake-held signal, it returns to the stationary position. If the vehicle is in the in-reverse-motion position and it receives the accelerate signal or the brake-pressed signal, it remains in the in-reverse-motion position. 
If the vehicle is in the in-forward-motion position and it receives the accelerate signal or the brake-pressed signal, it remains in the in-forward-motion position. If the vehicle is in the in-forward-motion position and it receives the set-cruise-control signal, it moves into the cruise-control-engaged position. 
If the vehicle is in the cruise-control-engaged position and it receives the accelerate signal then the speed remains constant and it remains in the cruise-control-engaged position. If the vehicle is in the cruise-control-engaged position and it receives the brake-pressed signal then it returns to the in-forward-motion position. 
If the vehicle is in the in-forward-motion or the in-reverse-motion positions and the speed is at 0, then the vehicle returns to the stationary position.


## Available Scripts

In the project directory, you can run:

### `npm install`

Install the dependencies in the local node_modules folder.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

