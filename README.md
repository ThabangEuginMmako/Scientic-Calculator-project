Scientific Calculator

This is a simple scientific calculator application built using Node.js, Express, and MongoDB on the backend, and HTML, CSS, and JavaScript on the frontend. It allows users to perform basic arithmetic operations, as well as some scientific functions.

Backend (Node.js, Express, MongoDB)

Setup

1.Install Dependencies:
Ensure that you have Node.js and npm installed. Install the required npm packages using the following command:

$ npm install express mongoose body-parser

2.MongoDB Configuration:
Make sure you have MongoDB installed and running. Adjust the MongoDB connection string in the mongoose.connect function in server.js to match your MongoDB configuration.

Running the Server
Run the following command to start the server:

$ node server.js

The server will be accessible at http://localhost:3000.

API Endpoints
POST /calculate:
Calculate the result of a mathematical expression. The expression should be sent in the request body as JSON. Example:

{
  "expression": "2 + 2"
}

GET /history:
Retrieve the calculation history stored in the MongoDB database.

Frontend (HTML, CSS, JavaScript)
UI Layout
The frontend consists of a simple HTML page with Bootstrap for styling. The calculator interface includes numeric buttons, arithmetic operators, and some scientific function buttons.

JavaScript Logic
The calculator logic is implemented using JavaScript in the script.js file. It handles user input, evaluates expressions, and updates the display accordingly.

Additional Notes
The calculator uses the eval function for simplicity, but it's not recommended for production due to security concerns. Consider using a library like math.js for a safer evaluation of mathematical expressions.
Usage
Open the HTML file (index.html) in a web browser to access the calculator interface.

Perform calculations using the numeric and operator buttons.

Scientific functions such as sine, cosine, logarithms, and square root are available for use.

View the calculation history by clicking the "History" button.

Disclaimer
This calculator is intended for educational purposes and may not be suitable for use in critical applications. Always be cautious when dealing with user input and evaluate expressions securely.

Feel free to customize and extend the application based on your needs!











