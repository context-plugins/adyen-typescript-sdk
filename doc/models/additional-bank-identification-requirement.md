
# Additional Bank Identification Requirement

## Structure

`AdditionalBankIdentificationRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalBankIdentificationType` | [`AdditionalBankIdentificationTypeEnum \| undefined`](../../doc/models/additional-bank-identification-type-enum.md) | Optional | The type of additional bank identification, depending on the country.<br><br>Possible values:<br><br>* **auBsbCode**: The 6-digit [Australian Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or spaces.<br>* **caRoutingNumber**: The 9-digit [Canadian routing number](https://en.wikipedia.org/wiki/Routing_number_(Canada)), in EFT format, without separators or spaces.<br>* **gbSortCode**: The 6-digit [UK sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or spaces<br>* **usRoutingNumber**: The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or spaces. |
| `description` | `string \| undefined` | Optional | The description of the additional bank identification requirement. |
| `type` | `string` | Required, Constant | **additionalBankIdentificationRequirement**<br><br>**Value**: `'additionalBankIdentificationRequirement'` |

## Example

```ts
import {
  AdditionalBankIdentificationRequirement,
  AdditionalBankIdentificationTypeEnum,
} from 'adyen';

const additionalBankIdentificationRequirement: AdditionalBankIdentificationRequirement = {
  type: 'additionalBankIdentificationRequirement',
  additionalBankIdentificationType: AdditionalBankIdentificationTypeEnum.AuBsbCode,
  description: 'description4',
};
```

