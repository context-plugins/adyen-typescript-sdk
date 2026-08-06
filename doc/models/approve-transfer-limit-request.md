
# Approve Transfer Limit Request

*This model accepts additional fields of type unknown.*

## Structure

`ApproveTransferLimitRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferLimitIds` | `string[]` | Required | A list that includes the `transferLimitId` of all the pending transfer limits you want to approve.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `2147483647` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ApproveTransferLimitRequest } from 'adyen';

const approveTransferLimitRequest: ApproveTransferLimitRequest = {
  transferLimitIds: [
    'transferLimitIds8',
    'transferLimitIds9',
    'transferLimitIds0'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

