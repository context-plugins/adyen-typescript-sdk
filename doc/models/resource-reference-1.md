
# Resource Reference 1

Contains information about the balance account involved in the transfer.

*This model accepts additional fields of type unknown.*

## Structure

`ResourceReference1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | The description of the resource. |
| `id` | `string \| undefined` | Optional | The unique identifier of the resource. |
| `reference` | `string \| undefined` | Optional | The reference for the resource. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ResourceReference1 } from 'adyen';

const resourceReference1: ResourceReference1 = {
  description: 'description6',
  id: 'id6',
  reference: 'reference2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

