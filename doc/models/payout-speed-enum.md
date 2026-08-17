
# Payout Speed Enum

Speed with which payouts for this account are processed. Permitted values: `STANDARD`, `SAME_DAY`.

## Enumeration

`PayoutSpeedEnum`

## Fields

| Name |
|  --- |
| `INSTANT` |
| `SAMEDAY` |
| `STANDARD` |

## Example

```ts
import { PayoutSpeedEnum } from 'adyen';

const payoutSpeed = PayoutSpeedEnum.SAMEDAY;
```

