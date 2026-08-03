
# Schedule 1

The new payout schedule for the account.

Possible values: `DEFAULT`, `DAILY`, `DAILY_US`, `DAILY_EU`, `DAILY_AU`, `DAILY_SG`, `WEEKLY`, `WEEKLY_ON_TUE_FRI_MIDNIGHT`, `BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT`, `MONTHLY`, `HOLD`.

> `HOLD` prevents scheduled payouts, but you can still initiate payouts manually.

## Enumeration

`Schedule1`

## Fields

| Name |
|  --- |
| `BiweeklyOn1StAnd15ThAtMidnight` |
| `Daily` |
| `DailyAu` |
| `DailyEu` |
| `DailySg` |
| `DailyUs` |
| `Hold` |
| `Monthly` |
| `Weekly` |
| `WeeklyMonToFriAu` |
| `WeeklyMonToFriEu` |
| `WeeklyMonToFriUs` |
| `WeeklyOnTueFriMidnight` |
| `WeeklySunToThuAu` |
| `WeeklySunToThuUs` |

## Example

```ts
import { Schedule1 } from 'adyenlib';

const schedule1 = Schedule1.Daily;
```

