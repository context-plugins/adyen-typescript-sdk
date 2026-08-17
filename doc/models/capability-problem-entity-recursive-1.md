
# Capability Problem Entity Recursive 1

## Structure

`CapabilityProblemEntityRecursive1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documents` | `string[] \| undefined` | Optional | List of document IDs corresponding to the verification errors from capabilities. |
| `id` | `string \| undefined` | Optional | - |
| `type` | [`Type311Enum \| undefined`](../../doc/models/type-311-enum.md) | Optional | - |

## Example

```ts
import { CapabilityProblemEntityRecursive1, Type311Enum } from 'adyen';

const capabilityProblemEntityRecursive1: CapabilityProblemEntityRecursive1 = {
  documents: [
    'documents7',
    'documents8',
    'documents9'
  ],
  id: 'id8',
  type: Type311Enum.BankAccount,
};
```

