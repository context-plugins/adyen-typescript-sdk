
# Transfer Review 1

Contains status updates related to additional reviews.

*This model accepts additional fields of type unknown.*

## Structure

`TransferReview1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `numberOfApprovalsRequired` | `number \| undefined` | Optional | Shows the number of [approvals](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) required to process the transfer. |
| `scaOnApproval` | [`ScaOnApproval \| undefined`](../../doc/models/sca-on-approval.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ScaOnApproval, TransferReview1 } from 'adyen';

const transferReview1: TransferReview1 = {
  numberOfApprovalsRequired: 128,
  scaOnApproval: ScaOnApproval.Required,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

