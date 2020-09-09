import {STRIPE_API_KEY} from "./const";
const stripe = require('stripe')(STRIPE_API_KEY);

/**
 * Class
 * @class
 * @classdesc Class to handle all the payments to Stripe
 * @author Marco Tribuzio
 */
class Payments {

  //const payment;

  static async createPaymentIntent () {

    const stripe = require('stripe')('sk_test_51HOeDTKlawRfwL6oIjXuhQ5ZnBfgzKcxAAJDKJgEGcH9N3T9GhyEHBQR3fK4CF8azikBUspyaQ2W3SeHPjyfCLuX00Y1P7fteO');

    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: 'chf',
      payment_method_types: ['card'],
      receipt_email: 'jenny.rosen@example.com',
    });
    console.log("Payment", paymentIntent)

  }

}

export default Payments