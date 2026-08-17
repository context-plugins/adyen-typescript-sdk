
# Approve Transfer Limit Request

## Structure

`ApproveTransferLimitRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferLimitIds` | `string[]` | Required | A list that includes the `transferLimitId` of all the pending transfer limits you want to approve.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `2147483647` |

## Example

```ts
import { ApproveTransferLimitRequest } from 'adyen';

const approveTransferLimitRequest: ApproveTransferLimitRequest = {
  transferLimitIds: [
    'transferLimitIds8',
    'transferLimitIds9',
    'transferLimitIds0'
  ],
};
```

