
# Payout Schedule Response 1

The details of the payout schedule added to the account.

*This model accepts additional fields of type unknown.*

## Structure

`PayoutScheduleResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `nextScheduledPayout` | `string \| undefined` | Optional | The date of the next scheduled payout. |
| `schedule` | [`PayoutSchedule \| undefined`](../../doc/models/payout-schedule.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayoutSchedule, PayoutScheduleResponse1 } from 'adyen';

const payoutScheduleResponse1: PayoutScheduleResponse1 = {
  nextScheduledPayout: '2016-03-13T12:52:32.123Z',
  schedule: PayoutSchedule.Hold,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

