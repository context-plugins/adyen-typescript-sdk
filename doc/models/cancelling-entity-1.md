
# Cancelling Entity 1

The party that initiated the cancellation of the transaction.

Possible values: **merchant**, **cardholder**.

## Enumeration

`CancellingEntity1`

## Fields

| Name |
|  --- |
| `Merchant` |
| `Cardholder` |

## Example

```ts
import { CancellingEntity1 } from 'adyenlib';

const cancellingEntity1 = CancellingEntity1.Merchant;
```

