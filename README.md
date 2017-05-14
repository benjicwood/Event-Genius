# Event-Genius

The App has been created in React with Redux as a Web App using the API found at http://tech-test.egtools.co.uk/docs as provided by Ticket Arena as a technical test.

# Heroku

# Running Locally

In the command line navigate to the cloned folder and run the command 'npm install' to install all the dependencies from the npm package manager. Run the app with 'npm run dev' or 'npm run express-server' to start webpack and run the server.

# Tests

Running the command 'npm test' in the command line with the server running will show the result of the tests.

Actions: Tests that the action functions return an object when given the correct type and number of arguments.
Components: Shallow testing that the components called render successfully, checks necessary props are passed down.
Reducer: Tests that the reducer fires off the correct actions and produces the expected outcome.
Helpers: Tests that the functions extracted into their own modules work as intended.
