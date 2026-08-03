
# Iban Account Identification Requirement

*This model accepts additional fields of type unknown.*

## Structure

`IbanAccountIdentificationRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Specifies the allowed prefixes for the international bank account number as defined in the ISO-13616 standard. |
| `ibanPrefixes` | `string[] \| undefined` | Optional | Contains the list of allowed prefixes for international bank accounts. For example: NL, US, UK. |
| `type` | [`Type303`](../../doc/models/type-303.md) | Required | **ibanAccountIdentificationRequirement** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IbanAccountIdentificationRequirement, Type303 } from 'adyenlib';

const ibanAccountIdentificationRequirement: IbanAccountIdentificationRequirement = {
  type: Type303.IbanAccountIdentificationRequirement,
  description: 'description4',
  ibanPrefixes: [
    'ibanPrefixes6',
    'ibanPrefixes7'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

