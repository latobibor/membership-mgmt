This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Assumptions
Given the short term and the lack of time, I have made several assumptions which otherwise I would have checked with the relevant 
product manager/designer.

### API
* the API endpoint that returns the list of users is missing current access level of employees; therefore I could not populate access level dropdown with the existing values; if the administrator of the organization is curious about current settings this would raise an issue

## Corners cut

### Features
Since I'm travelling on Thursday I did not have time for all the features discussed in the memo. So here's a list of what needs to be done and what I think about doing them.

#### Add new member
If I had the time I would have asked how the "New Member" button would work since in the memo there is only a list of members result listed 
and a list of changes which need references to existing members (`person_id`). Therefore I would have liked to know what is the accepted payload for adding new members.
