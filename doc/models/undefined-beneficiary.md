
# Undefined Beneficiary

## Structure

`UndefinedBeneficiary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | The details of the undefined beneficiary. |
| `reference` | `string \| undefined` | Optional, Read-only | The reference of the undefined beneficiary. |

## Example

```ts
import { UndefinedBeneficiary } from 'adyen';

const undefinedBeneficiary: UndefinedBeneficiary = {
  description: 'description6',
};
```

