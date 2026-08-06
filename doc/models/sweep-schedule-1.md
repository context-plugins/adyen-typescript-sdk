
# Sweep Schedule 1

The schedule when the `triggerAmount` is evaluated. If the balance meets the threshold, funds are pushed out of or pulled in to the balance account.

*This model accepts additional fields of type unknown.*

## Structure

`SweepSchedule1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cronExpression` | `string \| undefined` | Optional | A [cron expression](https://en.wikipedia.org/wiki/Cron#CRON_expression) that is used to set the sweep schedule. The schedule uses the time zone of the balance account.<br>For example, **30 17 * * MON** schedules a sweep every Monday at 17:30.<br><br>The expression must have five values separated by a single space in the following order:<br><br>* Minute: **0-59**<br><br>* Hour: **0-23**<br><br>* Day of the month: **1-31**<br><br>* Month: **1-12** or **JAN-DEC**<br><br>* Day of the week: **0-7** (0 and 7 are Sunday) or **MON-SUN**.<br><br>The following non-standard characters are supported: **&ast;**, **L**, **#**, **W** and **/**. See [crontab guru](https://crontab.guru/) for more examples.<br><br>Required when `type` is **cron**. |
| `type` | [`Type6`](../../doc/models/type-6.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SweepSchedule1, Type6 } from 'adyen';

const sweepSchedule1: SweepSchedule1 = {
  type: Type6.Monthly,
  cronExpression: 'cronExpression6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

