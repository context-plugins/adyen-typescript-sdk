
# Delivery Method

*This model accepts additional fields of type unknown.*

## Structure

`DeliveryMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount16 \| undefined`](../../doc/models/amount-16.md) | Optional | - |
| `description` | `string \| undefined` | Optional | The name of the delivery method as shown to the shopper. |
| `reference` | `string \| undefined` | Optional | The reference of the delivery method. |
| `selected` | `boolean \| undefined` | Optional | If you display the PayPal lightbox with delivery methods, set to **true** for the delivery method that is selected. Only one delivery method can be selected at a time. |
| `type` | [`Type211 \| undefined`](../../doc/models/type-211.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeliveryMethod, Type211 } from 'adyenlib';

const deliveryMethod: DeliveryMethod = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  description: 'description8',
  reference: 'reference6',
  selected: false,
  type: Type211.Shipping,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

