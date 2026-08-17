
# Transfer Review 1

Contains status updates related to additional reviews.

## Structure

`TransferReview1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `numberOfApprovalsRequired` | `number \| undefined` | Optional | Shows the number of [approvals](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) required to process the transfer. |
| `scaOnApproval` | [`ScaOnApprovalEnum \| undefined`](../../doc/models/sca-on-approval-enum.md) | Optional | Shows the status of the Strong Customer Authentication (SCA) process.<br><br>Possible values: **required**, **notApplicable**. |

## Example

```ts
import { ScaOnApprovalEnum, TransferReview1 } from 'adyen';

const transferReview1: TransferReview1 = {
  numberOfApprovalsRequired: 128,
  scaOnApproval: ScaOnApprovalEnum.Required,
};
```

