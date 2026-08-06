
# Undefined Beneficiary

*This model accepts additional fields of type unknown.*

## Structure

`UndefinedBeneficiary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | The details of the undefined beneficiary. |
| `reference` | `string \| undefined` | Optional, Read-only | The reference of the undefined beneficiary. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UndefinedBeneficiary } from 'adyen';

const undefinedBeneficiary: UndefinedBeneficiary = {
  description: 'description6',
  reference: 'reference2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

