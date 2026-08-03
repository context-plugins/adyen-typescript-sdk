
# Payment Response 2

The object that contains the validation outcomes.
Only returned if `resultCode` is **Authorised** and if you have requested a payment validation in the request.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`PaymentValidationsNameResponse \| undefined`](../../doc/models/payment-validations-name-response.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentResponse2, Status11 } from 'adyenlib';

const paymentResponse2: PaymentResponse2 = {
  name: {
    rawResponse: {
      firstName: 'firstName0',
      fullName: 'fullName4',
      lastName: 'lastName8',
      middleName: 'middleName2',
      status: 'status6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    result: {
      firstName: 'firstName8',
      fullName: 'fullName6',
      lastName: 'lastName0',
      middleName: 'middleName4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    status: Status11.NotPerformed,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

