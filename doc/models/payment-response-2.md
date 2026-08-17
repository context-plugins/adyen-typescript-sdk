
# Payment Response 2

The object that contains the validation outcomes.
Only returned if `resultCode` is **Authorised** and if you have requested a payment validation in the request.

## Structure

`PaymentResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`PaymentValidationsNameResponse2 \| undefined`](../../doc/models/payment-validations-name-response-2.md) | Optional | Object that contains the status and outcomes of the [name validation](https://docs.adyen.com/payment-methods/cards/name-validation). |

## Example

```ts
import { PaymentResponse2, StatusEnum } from 'adyen';

const paymentResponse2: PaymentResponse2 = {
  name: {
    rawResponse: {
      firstName: 'firstName0',
      fullName: 'fullName4',
      lastName: 'lastName8',
      middleName: 'middleName2',
      status: 'status6',
    },
    result: {
      firstName: 'firstName8',
      fullName: 'fullName6',
      lastName: 'lastName0',
      middleName: 'middleName4',
    },
    status: StatusEnum.NotPerformed,
  },
};
```

