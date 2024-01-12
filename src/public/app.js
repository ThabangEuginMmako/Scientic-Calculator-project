const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/calculatorDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false, // Add this line to avoid deprecation warning
    //useCreateIndex: true

});

const calculationSchema = new mongoose.Schema({
    expression: String,
    result: String
});
const Calculation = mongoose.model('Calculation', calculationSchema);

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));
app.use(bodyParser.json()); // Add this line to parse JSON requests

// Handle calculator operations
app.post('/calculate', async (req, res) => {
    const expression = req.body.expression;
    try {
        const result = eval(expression); // Not recommended for production, consider using a library like math.js for security
        const newCalculation = new Calculation({ expression, result });
        await newCalculation.save();
        res.status(200).send({ result });
    } catch (error) {
        res.status(400).send({ error: 'Invalid expression' });
    }
});

// Get calculation history
app.get('/history', async (req, res) => {
    try {
        const history = await Calculation.find({}, '-_id expression result');
        res.status(200).send({ history });
    } catch (error) {
        res.status(500).send({ error: 'Internal server error' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});