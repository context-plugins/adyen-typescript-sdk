
# Modification

## Structure

`Modification`

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
import { Modification, Status24Enum } from 'adyen';

const modification: Modification = {
  direction: 'direction8',
  id: 'id2',
  reference: 'reference2',
  status: Status24Enum.DepositCorrection,
  type: 'type8',
};
```

