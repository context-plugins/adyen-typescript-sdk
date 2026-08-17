
# Payment Validations 2

The object that you can use to enable payment validations for a transaction.

## Structure

`PaymentValidations2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`Name6 \| undefined`](../../doc/models/name-6.md) | Optional | - |

## Example

```ts
import { PaymentValidations2 } from 'adyen';

const paymentValidations2: PaymentValidations2 = {
  name: {
    status: 'status2',
  },
};
```

