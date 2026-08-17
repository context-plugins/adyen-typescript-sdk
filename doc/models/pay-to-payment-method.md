
# Pay to Payment Method

## Structure

`PayToPaymentMethod`

## Inherits From

[`ShopperIdPaymentMethod`](../../doc/models/shopper-id-payment-method.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `shopperReference` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `0`, *Maximum Length*: `256` |

## Example

```ts
import { PayToPaymentMethod } from 'adyen';

const payToPaymentMethod: PayToPaymentMethod = {
  shopperReference: 'shopperReference8',
  type: 'payTo',
};
```

