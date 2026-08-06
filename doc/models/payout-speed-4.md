
# Payout Speed 4

Speed at which payouts for this account are processed.

Possible values: `STANDARD`, `SAME_DAY`.

## Enumeration

`PayoutSpeed4`

## Fields

| Name |
|  --- |
| `Instant` |
| `SameDay` |
| `Standard` |

## Example

```ts
import { PayoutSpeed4 } from 'adyen';

const payoutSpeed4 = PayoutSpeed4.Instant;
```

