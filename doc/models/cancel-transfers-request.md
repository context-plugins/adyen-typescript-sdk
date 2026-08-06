
# Cancel Transfers Request

*This model accepts additional fields of type unknown.*

## Structure

`CancelTransfersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferIds` | `string[] \| undefined` | Optional | Contains the unique identifiers of the transfers that you want to cancel. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CancelTransfersRequest } from 'adyen';

const cancelTransfersRequest: CancelTransfersRequest = {
  transferIds: [
    'transferIds0',
    'transferIds9',
    'transferIds8'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

