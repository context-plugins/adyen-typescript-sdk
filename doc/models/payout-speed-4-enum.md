
# Payout Speed 4 Enum

Speed at which payouts for this account are processed.

Possible values: `STANDARD`, `SAME_DAY`.

## Enumeration

`PayoutSpeed4Enum`

## Fields

| Name |
|  --- |
| `INSTANT` |
| `SAMEDAY` |
| `STANDARD` |

## Example

```ts
import { PayoutSpeed4Enum } from 'adyen';

const payoutSpeed4 = PayoutSpeed4Enum.INSTANT;
```

