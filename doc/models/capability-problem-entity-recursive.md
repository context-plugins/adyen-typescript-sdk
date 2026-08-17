
# Capability Problem Entity Recursive

## Structure

`CapabilityProblemEntityRecursive`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documents` | `string[] \| undefined` | Optional | List of document IDs to which the verification errors related to the capabilities correspond to. |
| `id` | `string \| undefined` | Optional | The ID of the entity. |
| `type` | [`Type33Enum \| undefined`](../../doc/models/type-33-enum.md) | Optional | Type of entity.<br><br>Possible values: **LegalEntity**, **BankAccount**, **Document**. |

## Example

```ts
import { CapabilityProblemEntityRecursive, Type33Enum } from 'adyen';

const capabilityProblemEntityRecursive: CapabilityProblemEntityRecursive = {
  documents: [
    'documents1'
  ],
  id: 'id2',
  type: Type33Enum.BankAccount,
};
```

