
# Capability Problem Entity 2

Contains the type of the entity and the corresponding ID.

*This model accepts additional fields of type unknown.*

## Structure

`CapabilityProblemEntity2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documents` | `string[] \| undefined` | Optional | List of document IDs to which the verification errors related to the capabilities correspond to. |
| `id` | `string \| undefined` | Optional | The ID of the entity. |
| `owner` | [`CapabilityProblemEntityRecursive \| undefined`](../../doc/models/capability-problem-entity-recursive.md) | Optional | - |
| `type` | [`Type3 \| undefined`](../../doc/models/type-3.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CapabilityProblemEntity2, Type3 } from 'adyenlib';

const capabilityProblemEntity2: CapabilityProblemEntity2 = {
  documents: [
    'documents9'
  ],
  id: 'id0',
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
  type: Type3.BankAccount,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

