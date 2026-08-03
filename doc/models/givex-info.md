
# Givex Info

*This model accepts additional fields of type unknown.*

## Structure

`GivexInfo`

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
import { GivexInfo, ShopperInteraction } from 'adyenlib';

const givexInfo: GivexInfo = {
  currencyCode: 'currencyCode6',
  password: 'password0',
  paymentFlow: ShopperInteraction.Ecommerce,
  username: 'username6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

