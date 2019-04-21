import React from 'react';
import StripeBtn from './StripeBtn';

import './styles/BillingView.sass';

const BillingView = () => (
  <div className="main billingView">
    <h1>Stripe Checkout</h1>
    <StripeBtn />
  </div>
);

export default BillingView;
