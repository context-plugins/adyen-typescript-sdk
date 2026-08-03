
# Upi Payment Method

*This model accepts additional fields of type unknown.*

## Structure

`UpiPaymentMethod`

## Inherits From

[`ShopperIdPaymentMethod`](../../doc/models/shopper-id-payment-method.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `virtualPaymentAddress` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `256` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UpiPaymentMethod } from 'adyenlib';

const upiPaymentMethod: UpiPaymentMethod = {
  virtualPaymentAddress: 'virtualPaymentAddress0',
  type: 'upi_collect',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

