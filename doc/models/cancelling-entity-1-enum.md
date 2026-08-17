
# Cancelling Entity 1 Enum

The party that initiated the cancellation of the transaction.

Possible values: **merchant**, **cardholder**.

## Enumeration

`CancellingEntity1Enum`

## Fields

| Name |
|  --- |
| `Merchant` |
| `Cardholder` |

## Example

```ts
import { CancellingEntity1Enum } from 'adyen';

const cancellingEntity1 = CancellingEntity1Enum.Merchant;
```

