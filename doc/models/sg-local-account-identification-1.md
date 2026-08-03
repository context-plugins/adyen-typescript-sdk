
# Sg Local Account Identification 1

*This model accepts additional fields of type unknown.*

## Structure

`SgLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 4- to 19-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `19` |
| `bic` | `string` | Required | The bank's 8- or 11-character BIC or SWIFT code.<br><br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `11` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SgLocalAccountIdentification1 } from 'adyenlib';

const sgLocalAccountIdentification1: SgLocalAccountIdentification1 = {
  accountNumber: 'accountNumber0',
  bic: 'bic4',
  type: 'sgLocal',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

