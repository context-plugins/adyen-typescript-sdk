
# Resource Reference 4

Contains information about the balance account involved in the transaction.

*This model accepts additional fields of type unknown.*

## Structure

`ResourceReference4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | The description of the resource. |
| `id` | `string \| undefined` | Optional | The unique identifier of the resource. |
| `reference` | `string \| undefined` | Optional | The reference for the resource. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ResourceReference4 } from 'adyenlib';

const resourceReference4: ResourceReference4 = {
  description: 'description6',
  id: 'id6',
  reference: 'reference8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

