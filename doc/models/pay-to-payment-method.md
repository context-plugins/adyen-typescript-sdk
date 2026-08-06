
# Pay to Payment Method

*This model accepts additional fields of type unknown.*

## Structure

`PayToPaymentMethod`

## Inherits From

[`ShopperIdPaymentMethod`](../../doc/models/shopper-id-payment-method.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `shopperReference` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `0`, *Maximum Length*: `256` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayToPaymentMethod } from 'adyen';

const payToPaymentMethod: PayToPaymentMethod = {
  shopperReference: 'shopperReference8',
  type: 'payTo',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

