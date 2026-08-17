
# Cancel Transfers Request

## Structure

`CancelTransfersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `transferIds` | `string[] \| undefined` | Optional | Contains the unique identifiers of the transfers that you want to cancel. |

## Example

```ts
import { CancelTransfersRequest } from 'adyen';

const cancelTransfersRequest: CancelTransfersRequest = {
  transferIds: [
    'transferIds0',
    'transferIds9',
    'transferIds8'
  ],
};
```

