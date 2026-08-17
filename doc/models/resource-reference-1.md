
# Resource Reference 1

Contains information about the balance account involved in the transfer.

## Structure

`ResourceReference1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | The description of the resource. |
| `id` | `string \| undefined` | Optional | The unique identifier of the resource. |
| `reference` | `string \| undefined` | Optional | The reference for the resource. |

## Example

```ts
import { ResourceReference1 } from 'adyen';

const resourceReference1: ResourceReference1 = {
  description: 'description6',
  id: 'id6',
  reference: 'reference2',
};
```

