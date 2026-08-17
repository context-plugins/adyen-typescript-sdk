
# Approve Transfers Request

## Structure

`ApproveTransfersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferIds` | `string[] \| undefined` | Optional | Contains the unique identifiers of the transfers that you want to approve. |

## Example

```ts
import { ApproveTransfersRequest } from 'adyen';

const approveTransfersRequest: ApproveTransfersRequest = {
  transferIds: [
    'transferIds6'
  ],
};
```

