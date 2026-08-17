
# Payment Instrument Reveal Info

## Structure

`PaymentInstrumentRevealInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cvc` | `string` | Required | The CVC2 value of the card. |
| `expiration` | [`Expiry2`](../../doc/models/expiry-2.md) | Required | The expiration date of the card. |
| `pan` | `string` | Required | The primary account number (PAN) of the card. |

## Example

```ts
import { PaymentInstrumentRevealInfo } from 'adyen';

const paymentInstrumentRevealInfo: PaymentInstrumentRevealInfo = {
  cvc: 'cvc0',
  expiration: {
    month: 'month6',
    year: 'year8',
  },
  pan: 'pan2',
};
```

