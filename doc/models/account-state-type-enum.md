
# Account State Type Enum

The state required for the account holder.

> Permitted values: `Processing`, `Payout`.

## Enumeration

`AccountStateTypeEnum`

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
import { AccountStateTypeEnum } from 'adyen';

const accountStateType = AccountStateTypeEnum.Payout;
```

