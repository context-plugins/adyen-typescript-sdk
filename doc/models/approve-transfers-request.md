
# Approve Transfers Request

*This model accepts additional fields of type unknown.*

## Structure

`ApproveTransfersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferIds` | `string[] \| undefined` | Optional | Contains the unique identifiers of the transfers that you want to approve. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ApproveTransfersRequest } from 'adyenlib';

const approveTransfersRequest: ApproveTransfersRequest = {
  transferIds: [
    'transferIds6'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

