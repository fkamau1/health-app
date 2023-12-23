const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const path = require('path'); 
const ejs = require('ejs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs'); 


const uri = 'mongodb://bmiUser:password@172.23.112.1:27017/bmiDB';
const dbName = 'bmiDB'; 

// Handle GET request to render the form
app.get('/', (req, res) => {    
    res.sendFile(path.join(__dirname, 'public', 'bmi.html'));
});

app.post('/calculateBMI', async (req, res) => {
    const name = req.body.name;
    const height = `${req.body.feet}' ${req.body.inch}"`;
    const weight = `${req.body.pound} LB`;

    const feetToInches = parseInt(req.body.feet) * 12 + parseInt(req.body.inch);
    const bmi = Math.round(((parseInt(req.body.pound) / (feetToInches * feetToInches)) * 703) * 10) / 10;

    let classification = '';
    if (bmi < 18.5) {
        classification = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
        classification = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
        classification = 'Overweight';
    } else {
        classification = 'Obese';
    }

    // Connect to the MongoDB server
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db(dbName);

        // Insert the BMI data into the 'bmi' collection
        await db.collection('bmi').insertOne({
            name: name,
            height: height,
            weight: weight,
            bmi: bmi,
            classification: classification
        });

        // Render the result page with the BMI data
        res.render('result', {
            name: name,
            height: height,
            weight: weight,
            bmi: bmi,
            classification: classification
        });
    } finally {
        await client.close();
    }
});

app.get('/history', async (req, res) => {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db(dbName);

        // Fetch all BMI entries from the 'bmi' collection
        const history = await db.collection('bmi').find().toArray();

        // Render the history page with the BMI history data
        res.render('history', { history: history });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    } finally {
        await client.close();
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});