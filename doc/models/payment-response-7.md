
# Payment Response 7

## Structure

`PaymentResponse7`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`PaymentValidationsNameResponse2 \| undefined`](../../doc/models/payment-validations-name-response-2.md) | Optional | Object that contains the status and outcomes of the [name validation](https://docs.adyen.com/payment-methods/cards/name-validation). |

## Example

```ts
import { PaymentResponse7, StatusEnum } from 'adyen';

const paymentResponse7: PaymentResponse7 = {
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

