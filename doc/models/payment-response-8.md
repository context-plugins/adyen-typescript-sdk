
# Payment Response 8

## Structure

`PaymentResponse8`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brand` | `string \| undefined` | Optional | The card brand that the shopper used to pay. Only returned if `paymentMethod.type` is **scheme**. |
| `type` | `string \| undefined` | Optional | The `paymentMethod.type` value used in the request. |

## Example

```ts
import { PaymentResponse8 } from 'adyen';

const paymentResponse8: PaymentResponse8 = {
  brand: 'brand6',
  type: 'type8',
};
```

