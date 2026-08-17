
# Return Transfer Response

## Structure

`ReturnTransferResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The unique identifier of the return. |
| `reference` | `string \| undefined` | Optional | Your internal reference for the return. |
| `status` | [`Status62Enum \| undefined`](../../doc/models/status-62-enum.md) | Optional | The resulting status of the return.<br><br>Possible values: **Authorised**, **Declined**. |
| `transferId` | `string \| undefined` | Optional | The unique identifier of the original transfer. |

## Example

```ts
import { ReturnTransferResponse, Status62Enum } from 'adyen';

const returnTransferResponse: ReturnTransferResponse = {
  id: 'id8',
  reference: 'reference4',
  status: Status62Enum.Authorised,
  transferId: 'transferId6',
};
```

