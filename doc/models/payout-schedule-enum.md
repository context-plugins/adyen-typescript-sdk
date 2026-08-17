
# Payout Schedule Enum

The payout schedule for the account.

Possible values: `DEFAULT`, `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`, `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`.

> `HOLD` prevents scheduled payouts, but you can still initiate payouts manually.

## Enumeration

`PayoutScheduleEnum`

## Fields

| Name |
|  --- |
| `BIWEEKLYON1STAND15THATMIDNIGHT` |
| `DAILY` |
| `DAILYAU` |
| `DAILYEU` |
| `DAILYSG` |
| `DAILYUS` |
| `HOLD` |
| `MONTHLY` |
| `WEEKLY` |
| `WEEKLYMONTOFRIAU` |
| `WEEKLYMONTOFRIEU` |
| `WEEKLYMONTOFRIUS` |
| `WEEKLYONTUEFRIMIDNIGHT` |
| `WEEKLYSUNTOTHUAU` |
| `WEEKLYSUNTOTHUUS` |

## Example

```ts
import { PayoutScheduleEnum } from 'adyen';

const payoutSchedule = PayoutScheduleEnum.WEEKLYSUNTOTHUUS;
```

