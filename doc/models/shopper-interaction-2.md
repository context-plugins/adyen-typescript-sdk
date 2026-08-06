
# Shopper Interaction 2

The sales channel. Required if:

- The merchant account does not have a sales channel.
- `type` is **alipay**.

When you provide this field, it overrides the default sales channel set on the merchant account.

Possible values: **eCommerce**, **pos**, **contAuth**, and **moto**.

## Enumeration

`ShopperInteraction2`

## Fields

| Name |
|  --- |
| `ECommerce` |
| `Pos` |
| `Moto` |
| `ContAuth` |

## Example

```ts
import { ShopperInteraction2 } from 'adyen';

const shopperInteraction2 = ShopperInteraction2.ECommerce;
```

