
# Transaction Rule Interval

*This model accepts additional fields of type unknown.*

## Structure

`TransactionRuleInterval`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `dayOfMonth` | `number \| undefined` | Optional | The day of month, used when the `duration.unit` is **months**. If not provided, by default, this is set to **1**, the first day of the month. |
| `dayOfWeek` | [`DayOfWeek \| undefined`](../../doc/models/day-of-week.md) | Optional | - |
| `duration` | [`Duration \| undefined`](../../doc/models/duration.md) | Optional | - |
| `timeOfDay` | `string \| undefined` | Optional | The time of day, in **hh:mm:ss** format, used when the `duration.unit` is **hours**. If not provided, by default, this is set to **00:00:00**. |
| `timeZone` | `string \| undefined` | Optional | The [time zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For example, **Europe/Amsterdam**. By default, this is set to **UTC**. |
| `type` | [`Type13`](../../doc/models/type-13.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DayOfWeek, TransactionRuleInterval, Type13, Unit } from 'adyen';

const transactionRuleInterval: TransactionRuleInterval = {
  type: Type13.Rolling,
  dayOfMonth: 94,
  dayOfWeek: DayOfWeek.Monday,
  duration: {
    unit: Unit.Weeks,
    value: 176,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  timeOfDay: 'timeOfDay2',
  timeZone: 'timeZone0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

