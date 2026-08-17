
# Transfer Request Review 2

Contains information required for triggering transfer reviews.

## Structure

`TransferRequestReview2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `numberOfApprovalsRequired` | `number \| undefined` | Optional | Specifies the number of [approvals](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) required to process the transfer. |
| `scaOnApproval` | `boolean \| undefined` | Optional | Specifies whether you will initiate Strong Customer Authentication (SCA) in thePOST [/transfers/approve](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) request.<br><br>Only applies to transfers made with an Adyen [business account](https://docs.adyen.com/platforms/business-accounts). |

## Example

```ts
import { TransferRequestReview2 } from 'adyen';

const transferRequestReview2: TransferRequestReview2 = {
  numberOfApprovalsRequired: 232,
  scaOnApproval: false,
};
```

