import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_51HctGMFYSC04atA1nMzDksMjogefmROQMhrUHaalgK4d5koLOFMxy9RcZwqjpCe4R2nmIpwW86OFBfPRbmhYcuOP00gJRLloFR'
  const onToken = token => {
    console.log(token)
    alert('Payment Successfull');
  }
  return (
    <StripeCheckout 
      label='Pay Now'
      name='ECOMMERCE FASHION'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )

}

export default StripeCheckoutButton;