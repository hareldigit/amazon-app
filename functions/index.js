const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const keys = require('./keys');
const { request, response } = require('express');
const stripe = require('stripe')(keys.stripe.SecretKey);


//API

//App config
const app = express();

//Middlewares
app.use(cors({origin:true}))
app.use(express.json())
//Api routes
app.get('/',(request,response)=>response.status(200).send('hello world'))

app.post('/payments/create',async(request,response)=>{
    const total = request.query.total;

    console.log('payment request was received for amount of ==> ', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"usd"
    });
    response.header('Access-Control-Allow-Origin', '*');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//Listen command
exports.api = functions.https.onRequest(app)


