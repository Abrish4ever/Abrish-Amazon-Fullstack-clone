const {setGlobalOptions} = require("firebase-functions");
const {onRequest} = require("firebase-functions/https");
const logger = require("firebase-functions/logger");
const express= require("express")
const cors= require("cors")
const dotenv = require("dotenv");
const { Message } = require("firebase-functions/pubsub");
dotenv.config()
const stripe = require("stripe")(process.env.STRIPE_KEY);

setGlobalOptions({ maxInstances: 10 });


const app= express()
app.use(cors({origin: true}))

app.use(express.json())

app.get("/", (req, res)=> {
    res.status(200).json({
        Message: "Success !",
    });
})


app.post("/payment/create", async(req, res)=> {
   const amount = req.query.amount;

    if(amount>0) {
        const paymentIntent = await stripe.paymentIntents.create({
          amount: amount,
          currency: "usd",
        });
        res.status(200).json({
          clientSecret: paymentIntent.client_secret,
        });
    } else {
        res.status(404).json({Message: "Total must be greater than 0"});

    }
})



exports.api = onRequest(app)



