
# Modification 2

The payment modification. Only applicable for [returned internal transfers](https://docs.adyen.com/platforms/internal-fund-transfers/internal-transfer-webhooks/#returned-internal-transfer).

*This model accepts additional fields of type unknown.*

## Structure

`Modification2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `direction` | `string \| undefined` | Optional | The direction of the money movement. |
| `id` | `string \| undefined` | Optional | Our reference for the modification. |
| `reference` | `string \| undefined` | Optional | Your reference for the modification, used internally within your platform. |
| `status` | [`Status25 \| undefined`](../../doc/models/status-25.md) | Optional | - |
| `type` | `string \| undefined` | Optional | The type of transfer modification. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Modification2, Status25 } from 'adyenlib';

const modification2: Modification2 = {
  direction: 'direction6',
  id: 'id0',
  reference: 'reference4',
  status: Status25.RefundReversed,
  type: 'type0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

