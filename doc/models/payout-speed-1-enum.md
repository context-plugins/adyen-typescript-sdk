
# Payout Speed 1 Enum

Speed at which payouts for this account are processed.

Possible values: `STANDARD` (default), `SAME_DAY`.

## Enumeration

`PayoutSpeed1Enum`

## Fields

| Name |
|  --- |
| `INSTANT` |
| `SAMEDAY` |
| `STANDARD` |

## Example

```ts
import { PayoutSpeed1Enum } from 'adyen';

const payoutSpeed1 = PayoutSpeed1Enum.INSTANT;
```

