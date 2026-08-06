
# Payout Schedule Execution Details

*This model accepts additional fields of type unknown.*

## Structure

`PayoutScheduleExecutionDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `reason` | `string \| undefined` | Optional | Human readable reason for why execution was not successful if applicable. |
| `reasonCode` | `string \| undefined` | Optional | Reason Code for why execution was not successful if applicable. |
| `transferId` | `string \| undefined` | Optional | The id of the transfer from executing the payout. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayoutScheduleExecutionDetails } from 'adyen';

const payoutScheduleExecutionDetails: PayoutScheduleExecutionDetails = {
  reason: 'reason4',
  reasonCode: 'reasonCode2',
  transferId: 'transferId6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

