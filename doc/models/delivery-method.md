
# Delivery Method

## Structure

`DeliveryMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount24 \| undefined`](../../doc/models/amount-24.md) | Optional | The cost of this delivery method. |
| `description` | `string \| undefined` | Optional | The name of the delivery method as shown to the shopper. |
| `reference` | `string \| undefined` | Optional | The reference of the delivery method. |
| `selected` | `boolean \| undefined` | Optional | If you display the PayPal lightbox with delivery methods, set to **true** for the delivery method that is selected. Only one delivery method can be selected at a time. |
| `type` | [`Type21Enum \| undefined`](../../doc/models/type-21-enum.md) | Optional | The type of the delivery method. |

## Example

```ts
import { DeliveryMethod, Type21Enum } from 'adyen';

const deliveryMethod: DeliveryMethod = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  description: 'description8',
  reference: 'reference6',
  selected: false,
  type: Type21Enum.Shipping,
};
```

