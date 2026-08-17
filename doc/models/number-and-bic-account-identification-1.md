
# Number and Bic Account Identification 1

## Structure

`NumberAndBicAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The bank account number, without separators or whitespace. The length and format depends on the bank or country.<br><br>**Constraints**: *Maximum Length*: `34` |
| `additionalBankIdentification` | [`AdditionalBankIdentification11 \| undefined`](../../doc/models/additional-bank-identification-11.md) | Optional | Additional identification codes of the bank. Some banks may require these identifiers for cross-border transfers. |
| `bic` | `string` | Required | The bank's 8- or 11-character BIC or SWIFT code.<br><br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `11` |

## Example

```ts
import {
  AdditionalBankIdentificationTypeEnum,
  NumberAndBicAccountIdentification1,
} from 'adyen';

const numberAndBicAccountIdentification1: NumberAndBicAccountIdentification1 = {
  accountNumber: 'accountNumber6',
  bic: 'bic0',
  additionalBankIdentification: {
    code: 'code2',
    type: AdditionalBankIdentificationTypeEnum.GbSortCode,
  },
  type: 'numberAndBic',
};
```

