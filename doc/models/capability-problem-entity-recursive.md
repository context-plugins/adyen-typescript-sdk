
# Capability Problem Entity Recursive

*This model accepts additional fields of type unknown.*

## Structure

`CapabilityProblemEntityRecursive`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documents` | `string[] \| undefined` | Optional | List of document IDs to which the verification errors related to the capabilities correspond to. |
| `id` | `string \| undefined` | Optional | The ID of the entity. |
| `type` | [`Type3 \| undefined`](../../doc/models/type-3.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CapabilityProblemEntityRecursive, Type3 } from 'adyen';

const capabilityProblemEntityRecursive: CapabilityProblemEntityRecursive = {
  documents: [
    'documents1'
  ],
  id: 'id2',
  type: Type3.BankAccount,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

