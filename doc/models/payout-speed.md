
# Payout Speed

Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.

## Enumeration

`PayoutSpeed`

## Fields

| Name |
|  --- |
| `Instant` |
| `SameDay` |
| `Standard` |

## Example

```ts
import { PayoutSpeed } from 'adyenlib';

const payoutSpeed = PayoutSpeed.SameDay;
```

