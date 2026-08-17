
# Transfer Review

## Structure

`TransferReview`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `numberOfApprovalsRequired` | `number \| undefined` | Optional | Shows the number of [approvals](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) required to process the transfer. |
| `scaOnApproval` | [`ScaOnApprovalEnum \| undefined`](../../doc/models/sca-on-approval-enum.md) | Optional | Shows the status of the Strong Customer Authentication (SCA) process.<br><br>Possible values: **required**, **notApplicable**. |

## Example

```ts
import { ScaOnApprovalEnum, TransferReview } from 'adyen';

const transferReview: TransferReview = {
  numberOfApprovalsRequired: 244,
  scaOnApproval: ScaOnApprovalEnum.NotApplicable,
};
```

