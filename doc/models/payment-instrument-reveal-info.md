
# Payment Instrument Reveal Info

*This model accepts additional fields of type unknown.*

## Structure

`PaymentInstrumentRevealInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cvc` | `string` | Required | The CVC2 value of the card. |
| `expiration` | [`Expiry`](../../doc/models/expiry.md) | Required | - |
| `pan` | `string` | Required | The primary account number (PAN) of the card. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentInstrumentRevealInfo } from 'adyen';

const paymentInstrumentRevealInfo: PaymentInstrumentRevealInfo = {
  cvc: 'cvc0',
  expiration: {
    month: 'month6',
    year: 'year8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  pan: 'pan2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

