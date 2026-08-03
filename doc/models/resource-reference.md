
# Resource Reference

*This model accepts additional fields of type unknown.*

## Structure

`ResourceReference`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | The description of the resource. |
| `id` | `string \| undefined` | Optional | The unique identifier of the resource. |
| `reference` | `string \| undefined` | Optional | The reference for the resource. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ResourceReference } from 'adyenlib';

const resourceReference: ResourceReference = {
  description: 'description6',
  id: 'id6',
  reference: 'reference8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

