
# Payout Schedule Executions

## Structure

`PayoutScheduleExecutions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payoutScheduleExecutions` | [`PayoutScheduleExecution[]`](../../doc/models/payout-schedule-execution.md) | Required | Contains a list of executions of the payout schedule. |

## Example

```ts
import { ExecutionResult1Enum, PayoutScheduleExecutions } from 'adyen';

const payoutScheduleExecutions: PayoutScheduleExecutions = {
  payoutScheduleExecutions: [
    {
      id: 'id2',
      result: ExecutionResult1Enum.Failed,
      resultDetails: {
        reason: 'reason8',
        reasonCode: 'reasonCode0',
        transferId: 'transferId4',
      },
      triggeredAt: '2016-03-13T12:52:32.123Z',
    }
  ],
};
```

