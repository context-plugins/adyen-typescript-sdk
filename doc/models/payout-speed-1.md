
# Payout Speed 1

Speed at which payouts for this account are processed.

Possible values: `STANDARD` (default), `SAME_DAY`.

## Enumeration

`PayoutSpeed1`

## Fields

| Name |
|  --- |
| `Instant` |
| `SameDay` |
| `Standard` |

## Example

```ts
import { PayoutSpeed1 } from 'adyenlib';

const payoutSpeed1 = PayoutSpeed1.Instant;
```

