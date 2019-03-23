import React from 'react';
import StripeBtn from './StripeBtn';

import './styles/BillingView.scss';

const BillingView = () => (
  <div className="example">
    <h1>Stripe Checkout</h1>
    <StripeBtn />
  </div>
);

export default BillingView;
