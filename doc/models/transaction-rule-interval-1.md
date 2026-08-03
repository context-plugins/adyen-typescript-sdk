
# Transaction Rule Interval 1

The [time interval](https://docs.adyen.com/issuing/transaction-rules#time-intervals) when the rule conditions apply.

*This model accepts additional fields of type unknown.*

## Structure

`TransactionRuleInterval1`

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
import { DayOfWeek, TransactionRuleInterval1, Type13, Unit } from 'adyenlib';

const transactionRuleInterval1: TransactionRuleInterval1 = {
  type: Type13.Daily,
  dayOfMonth: 96,
  dayOfWeek: DayOfWeek.Thursday,
  duration: {
    unit: Unit.Weeks,
    value: 176,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  timeOfDay: 'timeOfDay0',
  timeZone: 'timeZone2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

