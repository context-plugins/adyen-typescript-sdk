
# Number and Bic Account Identification 1

*This model accepts additional fields of type unknown.*

## Structure

`NumberAndBicAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The bank account number, without separators or whitespace. The length and format depends on the bank or country.<br><br>**Constraints**: *Maximum Length*: `34` |
| `additionalBankIdentification` | [`AdditionalBankIdentification \| undefined`](../../doc/models/additional-bank-identification.md) | Optional | - |
| `bic` | `string` | Required | The bank's 8- or 11-character BIC or SWIFT code.<br><br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `11` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AdditionalBankIdentificationType,
  NumberAndBicAccountIdentification1,
} from 'adyenlib';

const numberAndBicAccountIdentification1: NumberAndBicAccountIdentification1 = {
  accountNumber: 'accountNumber6',
  bic: 'bic0',
  additionalBankIdentification: {
    code: 'code2',
    type: AdditionalBankIdentificationType.GbSortCode,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  type: 'numberAndBic',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

