
# Resource Reference 3

Contains information about the account holder associated with the `balanceAccount`.

*This model accepts additional fields of type unknown.*

## Structure

`ResourceReference3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | The description of the resource. |
| `id` | `string \| undefined` | Optional | The unique identifier of the resource. |
| `reference` | `string \| undefined` | Optional | The reference for the resource. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ResourceReference3 } from 'adyen';

const resourceReference3: ResourceReference3 = {
  description: 'description8',
  id: 'id8',
  reference: 'reference6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

