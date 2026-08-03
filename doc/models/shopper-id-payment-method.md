
# Shopper Id Payment Method

*This model accepts additional fields of type unknown.*

## Structure

`ShopperIdPaymentMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UpiPaymentMethod } from 'adyenlib';

const shopperIdPaymentMethod: UpiPaymentMethod = {
  virtualPaymentAddress: 'virtualPaymentAddress4',
  type: 'upi_collect',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

