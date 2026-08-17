
# Capability Problem Entity 1

## Structure

`CapabilityProblemEntity1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documents` | `string[] \| undefined` | Optional | List of document IDs corresponding to the verification errors from capabilities. |
| `id` | `string \| undefined` | Optional | - |
| `owner` | [`CapabilityProblemEntityRecursive1 \| undefined`](../../doc/models/capability-problem-entity-recursive-1.md) | Optional | - |
| `type` | [`Type311Enum \| undefined`](../../doc/models/type-311-enum.md) | Optional | - |

## Example

```ts
import { CapabilityProblemEntity1, Type311Enum } from 'adyen';

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
    type: Type311Enum.LegalEntity,
  },
  type: Type311Enum.LegalEntity,
};
```

