
# Modification 2

The payment modification. Only applicable for [returned internal transfers](https://docs.adyen.com/platforms/internal-fund-transfers/internal-transfer-webhooks/#returned-internal-transfer).

## Structure

`Modification2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `direction` | `string \| undefined` | Optional | The direction of the money movement. |
| `id` | `string \| undefined` | Optional | Our reference for the modification. |
| `reference` | `string \| undefined` | Optional | Your reference for the modification, used internally within your platform. |
| `status` | [`Status24Enum \| undefined`](../../doc/models/status-24-enum.md) | Optional | The status of the transfer event. |
| `type` | `string \| undefined` | Optional | The type of transfer modification. |

## Example

```ts
import { Modification2, Status24Enum } from 'adyen';

const modification2: Modification2 = {
  direction: 'direction6',
  id: 'id0',
  reference: 'reference4',
  status: Status24Enum.RefundReversed,
  type: 'type0',
};
```

