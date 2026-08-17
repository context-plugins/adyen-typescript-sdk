
# Payment Response 1

Details about the payment method used in the transaction.
Only returned if `resultCode` is **Authorised**.

## Structure

`PaymentResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brand` | `string \| undefined` | Optional | The card brand that the shopper used to pay. Only returned if `paymentMethod.type` is **scheme**. |
| `type` | `string \| undefined` | Optional | The `paymentMethod.type` value used in the request. |

## Example

```ts
import { PaymentResponse1 } from 'adyen';

const paymentResponse1: PaymentResponse1 = {
  brand: 'brand2',
  type: 'type2',
};
```

