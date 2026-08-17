
# Bank Account Identification Type Requirement

## Structure

`BankAccountIdentificationTypeRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountIdentificationTypes` | [`BankAccountIdentificationTypeEnum[] \| undefined`](../../doc/models/bank-account-identification-type-enum.md) | Optional | List of bank account identification types: eg.; [iban , numberAndBic] |
| `description` | `string \| undefined` | Optional | Specifies the bank account details for a particular route per required field in this object depending on the country of the bank account and the currency of the transfer. |
| `type` | `string` | Required, Constant | **bankAccountIdentificationTypeRequirement**<br><br>**Value**: `'bankAccountIdentificationTypeRequirement'` |

## Example

```ts
import {
  BankAccountIdentificationTypeEnum,
  BankAccountIdentificationTypeRequirement,
} from 'adyen';

const bankAccountIdentificationTypeRequirement: BankAccountIdentificationTypeRequirement = {
  type: 'bankAccountIdentificationTypeRequirement',
  bankAccountIdentificationTypes: [
    BankAccountIdentificationTypeEnum.CzLocal
  ],
  description: 'description6',
};
```

