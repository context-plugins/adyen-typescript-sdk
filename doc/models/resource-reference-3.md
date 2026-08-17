
# Resource Reference 3

Contains information about the account holder associated with the `balanceAccount`.

## Structure

`ResourceReference3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | The description of the resource. |
| `id` | `string \| undefined` | Optional | The unique identifier of the resource. |
| `reference` | `string \| undefined` | Optional | The reference for the resource. |

## Example

```ts
import { ResourceReference3 } from 'adyen';

const resourceReference3: ResourceReference3 = {
  description: 'description8',
  id: 'id8',
  reference: 'reference6',
};
```

