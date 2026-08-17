
# Payout Schedule Execution

## Structure

`PayoutScheduleExecution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The unique identifier of the payout execution. |
| `result` | [`ExecutionResult1Enum \| undefined`](../../doc/models/execution-result-1-enum.md) | Optional | The status of the payout execution.<br><br>Possible values:<br><br>- **succeeded**: The payout was sent successfully.<br>- **failed**: The payout could not be sent because an error occurred.<br>- **skipped**: The payout was not triggered as expected. |
| `resultDetails` | [`PayoutScheduleExecutionDetails2 \| undefined`](../../doc/models/payout-schedule-execution-details-2.md) | Optional | Contains information about the result of the payout execution. |
| `triggeredAt` | `string \| undefined` | Optional | The date and time when the payout execution was initiated. |

## Example

```ts
import { ExecutionResult1Enum, PayoutScheduleExecution } from 'adyen';

const payoutScheduleExecution: PayoutScheduleExecution = {
  id: 'id0',
  result: ExecutionResult1Enum.Failed,
  resultDetails: {
    reason: 'reason8',
    reasonCode: 'reasonCode0',
    transferId: 'transferId4',
  },
  triggeredAt: '2016-03-13T12:52:32.123Z',
};
```

