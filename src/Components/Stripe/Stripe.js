import React from 'react'
import keys from '../../keys'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe(keys.stripe.PublishableKey)

function Stripe({ payment }) {
  return <Elements stripe={promise}>{payment}</Elements>
}

export default Stripe
