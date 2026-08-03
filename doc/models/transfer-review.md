
# Transfer Review

*This model accepts additional fields of type unknown.*

## Structure

`TransferReview`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `numberOfApprovalsRequired` | `number \| undefined` | Optional | Shows the number of [approvals](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) required to process the transfer. |
| `scaOnApproval` | [`ScaOnApproval \| undefined`](../../doc/models/sca-on-approval.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ScaOnApproval, TransferReview } from 'adyenlib';

const transferReview: TransferReview = {
  numberOfApprovalsRequired: 244,
  scaOnApproval: ScaOnApproval.NotApplicable,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

