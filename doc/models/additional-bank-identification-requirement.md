
# Additional Bank Identification Requirement

*This model accepts additional fields of type unknown.*

## Structure

`AdditionalBankIdentificationRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalBankIdentificationType` | [`AdditionalBankIdentificationType \| undefined`](../../doc/models/additional-bank-identification-type.md) | Optional | - |
| `description` | `string \| undefined` | Optional | The description of the additional bank identification requirement. |
| `type` | [`Type610`](../../doc/models/type-610.md) | Required | **additionalBankIdentificationRequirement** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AdditionalBankIdentificationRequirement,
  AdditionalBankIdentificationType,
  Type610,
} from 'adyen';

const additionalBankIdentificationRequirement: AdditionalBankIdentificationRequirement = {
  type: Type610.AdditionalBankIdentificationRequirement,
  additionalBankIdentificationType: AdditionalBankIdentificationType.AuBsbCode,
  description: 'description4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

