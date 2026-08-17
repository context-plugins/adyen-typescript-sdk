
# Transaction Rule Interval

## Structure

`TransactionRuleInterval`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dayOfMonth` | `number \| undefined` | Optional | The day of month, used when the `duration.unit` is **months**. If not provided, by default, this is set to **1**, the first day of the month. |
| `dayOfWeek` | [`DayOfWeekEnum \| undefined`](../../doc/models/day-of-week-enum.md) | Optional | The day of week, used when the `duration.unit` is **weeks**. If not provided, by default, this is set to **monday**.<br><br>Possible values: **sunday**, **monday**, **tuesday**, **wednesday**, **thursday**, **friday**. |
| `duration` | [`Duration1 \| undefined`](../../doc/models/duration-1.md) | Optional | The duration, which you can specify in hours, days, weeks, or months. The maximum duration is 90 days or an equivalent in other units. Required when the `type` is **rolling** or **sliding**. |
| `timeOfDay` | `string \| undefined` | Optional | The time of day, in **hh:mm:ss** format, used when the `duration.unit` is **hours**. If not provided, by default, this is set to **00:00:00**. |
| `timeZone` | `string \| undefined` | Optional | The [time zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For example, **Europe/Amsterdam**. By default, this is set to **UTC**. |
| `type` | [`Type131Enum`](../../doc/models/type-131-enum.md) | Required | The [type of interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) during which the rule conditions and limits apply, and how often counters are reset.<br><br>Possible values:<br><br>* **perTransaction**: conditions are evaluated and the counters are reset for every transaction.<br>* **daily**: the counters are reset daily at 00:00:00 CET.<br>* **weekly**: the counters are reset every Monday at 00:00:00 CET.<br>* **monthly**: the counters reset every first day of the month at 00:00:00 CET.<br>* **lifetime**: conditions are applied to the lifetime of the payment instrument.<br>* **rolling**: conditions are applied and the counters are reset based on a `duration`. If the reset date and time are not provided, Adyen applies the default reset time similar to fixed intervals. For example, if the duration is every two weeks, the counter resets every third Monday at 00:00:00 CET.<br>* **sliding**: conditions are applied and the counters are reset based on the current time and a `duration` that you specify. |

## Example

```ts
import {
  DayOfWeekEnum,
  TransactionRuleInterval,
  Type131Enum,
  UnitEnum,
} from 'adyen';

const transactionRuleInterval: TransactionRuleInterval = {
  type: Type131Enum.Rolling,
  dayOfMonth: 94,
  dayOfWeek: DayOfWeekEnum.Monday,
  duration: {
    unit: UnitEnum.Weeks,
    value: 176,
  },
  timeOfDay: 'timeOfDay2',
  timeZone: 'timeZone0',
};
```

