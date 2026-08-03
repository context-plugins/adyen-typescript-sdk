
# Nz Local Account Identification 1

*This model accepts additional fields of type unknown.*

## Structure

`NzLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 15-16 digit bank account number. The first 2 digits are the bank number, the next 4 digits are the branch number, the next 7 digits are the account number, and the final 2-3 digits are the suffix.<br><br>**Constraints**: *Minimum Length*: `15`, *Maximum Length*: `16` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NzLocalAccountIdentification1 } from 'adyenlib';

const nzLocalAccountIdentification1: NzLocalAccountIdentification1 = {
  accountNumber: 'accountNumber4',
  type: 'nzLocal',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

