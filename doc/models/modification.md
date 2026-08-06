
# Modification

*This model accepts additional fields of type unknown.*

## Structure

`Modification`

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
import { Modification, Status25 } from 'adyen';

const modification: Modification = {
  direction: 'direction8',
  id: 'id2',
  reference: 'reference2',
  status: Status25.DepositCorrection,
  type: 'type8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

