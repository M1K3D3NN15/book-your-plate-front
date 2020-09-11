import {STRIPE_API_PUBLIC_KEY} from "./const";
import { loadStripe } from "@stripe/stripe-js";
import nodeFetch from "./nodeFetch";
const fetch = require('node-fetch');



/**
 * Class
 * @class
 * @classdesc Class to handle all the payments to Stripe
 * @author Marco Tribuzio
 */
class Payments {

  //const payment;

  static async createPaymentIntent () {
    try {

      const stripePromise = loadStripe(STRIPE_API_PUBLIC_KEY);

      const stripe = await stripePromise;
      const response = await nodeFetch.post('/payments/create-session')

      console.log("Ciao")

      const session = await response.json();
      // When the customer clicks on the button, redirect them to Checkout.
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      }

    } catch (e) {
      console.log("Error", e)
    }
  }

}

export default Payments