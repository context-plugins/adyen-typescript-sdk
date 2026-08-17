
# Iban Account Identification Requirement

## Structure

`IbanAccountIdentificationRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Specifies the allowed prefixes for the international bank account number as defined in the ISO-13616 standard. |
| `ibanPrefixes` | `string[] \| undefined` | Optional | Contains the list of allowed prefixes for international bank accounts. For example: NL, US, UK. |
| `type` | `string` | Required, Constant | **ibanAccountIdentificationRequirement**<br><br>**Value**: `'ibanAccountIdentificationRequirement'` |

## Example

```ts
import { IbanAccountIdentificationRequirement } from 'adyen';

const ibanAccountIdentificationRequirement: IbanAccountIdentificationRequirement = {
  type: 'ibanAccountIdentificationRequirement',
  description: 'description4',
  ibanPrefixes: [
    'ibanPrefixes6',
    'ibanPrefixes7'
  ],
};
```

