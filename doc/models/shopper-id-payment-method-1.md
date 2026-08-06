
# Shopper Id Payment Method 1

paymentMethod

*This model accepts additional fields of type unknown.*

## Structure

`ShopperIdPaymentMethod1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ShopperIdPaymentMethod1 } from 'adyen';

const shopperIdPaymentMethod1: ShopperIdPaymentMethod1 = {
  type: 'ShopperIdPaymentMethod1',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

