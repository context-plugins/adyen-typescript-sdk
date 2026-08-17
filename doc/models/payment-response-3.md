
# Payment Response 3

Only returned for `resultCode`: **Authorised**.
Details about the payment method used in the transaction.

## Structure

`PaymentResponse3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brand` | `string \| undefined` | Optional | The card brand that the shopper used to pay. Only returned if `paymentMethod.type` is **scheme**. |
| `type` | `string \| undefined` | Optional | The `paymentMethod.type` value used in the request. |

## Example

```ts
import { PaymentResponse3 } from 'adyen';

const paymentResponse3: PaymentResponse3 = {
  brand: 'brand6',
  type: 'type2',
};
```

