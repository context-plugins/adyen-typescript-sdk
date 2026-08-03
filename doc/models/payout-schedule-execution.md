
# Payout Schedule Execution

*This model accepts additional fields of type unknown.*

## Structure

`PayoutScheduleExecution`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The unique identifier of the payout execution. |
| `result` | [`ExecutionResult1 \| undefined`](../../doc/models/execution-result-1.md) | Optional | - |
| `resultDetails` | [`PayoutScheduleExecutionDetails \| undefined`](../../doc/models/payout-schedule-execution-details.md) | Optional | - |
| `triggeredAt` | `string \| undefined` | Optional | The date and time when the payout execution was initiated. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ExecutionResult1, PayoutScheduleExecution } from 'adyenlib';

const payoutScheduleExecution: PayoutScheduleExecution = {
  id: 'id0',
  result: ExecutionResult1.Failed,
  resultDetails: {
    reason: 'reason8',
    reasonCode: 'reasonCode0',
    transferId: 'transferId4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  triggeredAt: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

