
# Payout Schedule Executions

*This model accepts additional fields of type unknown.*

## Structure

`PayoutScheduleExecutions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payoutScheduleExecutions` | [`PayoutScheduleExecution[]`](../../doc/models/payout-schedule-execution.md) | Required | Contains a list of executions of the payout schedule. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ExecutionResult1, PayoutScheduleExecutions } from 'adyenlib';

const payoutScheduleExecutions: PayoutScheduleExecutions = {
  payoutScheduleExecutions: [
    {
      id: 'id2',
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

