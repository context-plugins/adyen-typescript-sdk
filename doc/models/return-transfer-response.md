
# Return Transfer Response

*This model accepts additional fields of type unknown.*

## Structure

`ReturnTransferResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The unique identifier of the return. |
| `reference` | `string \| undefined` | Optional | Your internal reference for the return. |
| `status` | [`Status61 \| undefined`](../../doc/models/status-61.md) | Optional | - |
| `transferId` | `string \| undefined` | Optional | The unique identifier of the original transfer. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReturnTransferResponse, Status61 } from 'adyenlib';

const returnTransferResponse: ReturnTransferResponse = {
  id: 'id8',
  reference: 'reference4',
  status: Status61.Authorised,
  transferId: 'transferId6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

