
# Givex Info 1

Details to provide if `type` is **givex**.

*This model accepts additional fields of type unknown.*

## Structure

`GivexInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currencyCode` | `string` | Required | The three-character ISO currency code, such as **EUR**. |
| `password` | `string` | Required | The password provided by the acquirer. |
| `paymentFlow` | [`ShopperInteraction`](../../doc/models/shopper-interaction.md) | Required | - |
| `username` | `string` | Required | The username provided by the acquirer. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GivexInfo1, ShopperInteraction } from 'adyen';

const givexInfo1: GivexInfo1 = {
  currencyCode: 'currencyCode0',
  password: 'password4',
  paymentFlow: ShopperInteraction.Ecommerce,
  username: 'username0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

