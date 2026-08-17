
# Resource Reference 5

The account holder associated with the balance account involved in the transfer.

## Structure

`ResourceReference5`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | The description of the resource. |
| `id` | `string \| undefined` | Optional | The unique identifier of the resource. |
| `reference` | `string \| undefined` | Optional | The reference for the resource. |

## Example

```ts
import { ResourceReference5 } from 'adyen';

const resourceReference5: ResourceReference5 = {
  description: 'description8',
  id: 'id2',
  reference: 'reference2',
};
```

