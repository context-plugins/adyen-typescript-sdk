
# Capability Problem Entity 1

*This model accepts additional fields of type unknown.*

## Structure

`CapabilityProblemEntity1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documents` | `string[] \| undefined` | Optional | List of document IDs corresponding to the verification errors from capabilities. |
| `id` | `string \| undefined` | Optional | - |
| `owner` | [`CapabilityProblemEntityRecursive \| undefined`](../../doc/models/capability-problem-entity-recursive.md) | Optional | - |
| `type` | [`Type32 \| undefined`](../../doc/models/type-32.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CapabilityProblemEntity1, Type3, Type32 } from 'adyenlib';

const capabilityProblemEntity1: CapabilityProblemEntity1 = {
  documents: [
    'documents5',
    'documents6',
    'documents7'
  ],
  id: 'id6',
  owner: {
    documents: [
      'documents3',
      'documents4'
    ],
    id: 'id4',
    type: Type3.LegalEntity,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  type: Type32.LegalEntity,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

