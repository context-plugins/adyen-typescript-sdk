
# Account State Type

The state required for the account holder.

> Permitted values: `Processing`, `Payout`.

## Enumeration

`AccountStateType`

## Fields

| Name |
|  --- |
| `LimitedPayout` |
| `LimitedProcessing` |
| `LimitlessPayout` |
| `LimitlessProcessing` |
| `Payout` |
| `Processing` |

## Example

```ts
import { AccountStateType } from 'adyenlib';

const accountStateType = AccountStateType.Payout;
```

