import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const data = useLoaderData();

  return (
    <div>
      <h1 className="text-2xl">Payment</h1>
      <p>
        please pay <span className="text-primary">{data.price} </span> for your
        product
      </p>
      <div className="my-12 w-96">
        <Elements stripe={stripePromise}>
          <CheckOutForm data={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
