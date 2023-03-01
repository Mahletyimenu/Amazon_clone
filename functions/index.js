const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51MgsHjEJQAQAYFtbSmiU22s4cw64Aal7ao8e7bpSiSAokWUybiOIa1kci7E4SMOnkCEygcl87PlLoMEx03sTE6wh00vcmXX3Ah');

//API 
//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get('/', (req, res) => {
    res.status(200).send("Hello World")
});

app.post('/payments/create/', async (req, res) => {
    const total = req.query.total;

    console.log("Payment received: ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    //201 - OK + created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// http://127.0.0.1:5001/fir-cdddd/us-central1/api

//Listen command
exports.api = functions.https.onRequest(app);