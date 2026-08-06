
# Payout Schedule Response 3

The details of the payout schedule to which the account is updated.

*This model accepts additional fields of type unknown.*

## Structure

`PayoutScheduleResponse3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `nextScheduledPayout` | `string \| undefined` | Optional | The date of the next scheduled payout. |
| `schedule` | [`PayoutSchedule \| undefined`](../../doc/models/payout-schedule.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayoutSchedule, PayoutScheduleResponse3 } from 'adyen';

const payoutScheduleResponse3: PayoutScheduleResponse3 = {
  nextScheduledPayout: '2016-03-13T12:52:32.123Z',
  schedule: PayoutSchedule.Monthly,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

