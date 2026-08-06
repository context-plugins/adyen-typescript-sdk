
# Capability Problem Entity Recursive 2

Contains details about the owner of the entity that has an error.

*This model accepts additional fields of type unknown.*

## Structure

`CapabilityProblemEntityRecursive2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documents` | `string[] \| undefined` | Optional | List of document IDs to which the verification errors related to the capabilities correspond to. |
| `id` | `string \| undefined` | Optional | The ID of the entity. |
| `type` | [`Type3 \| undefined`](../../doc/models/type-3.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CapabilityProblemEntityRecursive2, Type3 } from 'adyen';

const capabilityProblemEntityRecursive2: CapabilityProblemEntityRecursive2 = {
  documents: [
    'documents1',
    'documents2'
  ],
  id: 'id2',
  type: Type3.Document,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

