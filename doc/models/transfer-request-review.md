
# Transfer Request Review

*This model accepts additional fields of type unknown.*

## Structure

`TransferRequestReview`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `numberOfApprovalsRequired` | `number \| undefined` | Optional | Specifies the number of [approvals](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) required to process the transfer. |
| `scaOnApproval` | `boolean \| undefined` | Optional | Specifies whether you will initiate Strong Customer Authentication (SCA) in thePOST [/transfers/approve](https://docs.adyen.com/api-explorer/transfers/latest/post/transfers/approve) request.<br><br>Only applies to transfers made with an Adyen [business account](https://docs.adyen.com/platforms/business-accounts). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TransferRequestReview } from 'adyen';

const transferRequestReview: TransferRequestReview = {
  numberOfApprovalsRequired: 114,
  scaOnApproval: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

