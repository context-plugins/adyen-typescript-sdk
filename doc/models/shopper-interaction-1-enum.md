
# Shopper Interaction 1 Enum

The sales channel. Required if:

- The merchant account does not have a sales channel.
- `type` is **alipay**.

When you provide this field, it overrides the default sales channel set on the merchant account.

Possible values: **eCommerce**, **pos**, **contAuth**, and **moto**.

## Enumeration

`ShopperInteraction1Enum`

## Fields

| Name |
|  --- |
| `ECommerce` |
| `Pos` |
| `Moto` |
| `ContAuth` |

## Example

```ts
import { ShopperInteraction1Enum } from 'adyen';

const shopperInteraction1 = ShopperInteraction1Enum.ECommerce;
```

