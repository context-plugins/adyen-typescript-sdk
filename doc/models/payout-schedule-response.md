
# Payout Schedule Response

*This model accepts additional fields of type unknown.*

## Structure

`PayoutScheduleResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `nextScheduledPayout` | `string \| undefined` | Optional | The date of the next scheduled payout. |
| `schedule` | [`PayoutSchedule \| undefined`](../../doc/models/payout-schedule.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayoutSchedule, PayoutScheduleResponse } from 'adyenlib';

const payoutScheduleResponse: PayoutScheduleResponse = {
  nextScheduledPayout: '2016-03-13T12:52:32.123Z',
  schedule: PayoutSchedule.DailyAu,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

