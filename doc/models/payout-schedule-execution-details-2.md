
# Payout Schedule Execution Details 2

Contains information about the result of the payout execution.

*This model accepts additional fields of type unknown.*

## Structure

`PayoutScheduleExecutionDetails2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | `string \| undefined` | Optional | Human readable reason for why execution was not successful if applicable. |
| `reasonCode` | `string \| undefined` | Optional | Reason Code for why execution was not successful if applicable. |
| `transferId` | `string \| undefined` | Optional | The id of the transfer from executing the payout. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayoutScheduleExecutionDetails2 } from 'adyen';

const payoutScheduleExecutionDetails2: PayoutScheduleExecutionDetails2 = {
  reason: 'reason8',
  reasonCode: 'reasonCode0',
  transferId: 'transferId4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

