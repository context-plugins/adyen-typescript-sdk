
# Capability Problem Entity

## Structure

`CapabilityProblemEntity`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documents` | `string[] \| undefined` | Optional | List of document IDs to which the verification errors related to the capabilities correspond to. |
| `id` | `string \| undefined` | Optional | The ID of the entity. |
| `owner` | [`CapabilityProblemEntityRecursive2 \| undefined`](../../doc/models/capability-problem-entity-recursive-2.md) | Optional | Contains details about the owner of the entity that has an error. |
| `type` | [`Type33Enum \| undefined`](../../doc/models/type-33-enum.md) | Optional | Type of entity.<br><br>Possible values: **LegalEntity**, **BankAccount**, **Document**. |

## Example

```ts
import { CapabilityProblemEntity, Type33Enum } from 'adyen';

const capabilityProblemEntity: CapabilityProblemEntity = {
  documents: [
    'documents1'
  ],
  id: 'id2',
  owner: {
    documents: [
      'documents3',
      'documents4'
    ],
    id: 'id4',
    type: Type33Enum.LegalEntity,
  },
  type: Type33Enum.BankAccount,
};
```

