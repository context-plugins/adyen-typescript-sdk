
# Entity Reference

*This model accepts additional fields of type unknown.*

## Structure

`EntityReference`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The unique identifier of the resource. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EntityReference } from 'adyenlib';

const entityReference: EntityReference = {
  id: 'id6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

