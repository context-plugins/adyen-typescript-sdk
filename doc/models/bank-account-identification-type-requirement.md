
# Bank Account Identification Type Requirement

*This model accepts additional fields of type unknown.*

## Structure

`BankAccountIdentificationTypeRequirement`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bankAccountIdentificationTypes` | [`BankAccountIdentificationType[] \| undefined`](../../doc/models/bank-account-identification-type.md) | Optional | List of bank account identification types: eg.; [iban , numberAndBic] |
| `description` | `string \| undefined` | Optional | Specifies the bank account details for a particular route per required field in this object depending on the country of the bank account and the currency of the transfer. |
| `type` | [`Type293`](../../doc/models/type-293.md) | Required | **bankAccountIdentificationTypeRequirement** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  BankAccountIdentificationType,
  BankAccountIdentificationTypeRequirement,
  Type293,
} from 'adyenlib';

const bankAccountIdentificationTypeRequirement: BankAccountIdentificationTypeRequirement = {
  type: Type293.BankAccountIdentificationTypeRequirement,
  bankAccountIdentificationTypes: [
    BankAccountIdentificationType.CzLocal
  ],
  description: 'description6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

