
# Br Local Account Identification 1

*This model accepts additional fields of type unknown.*

## Structure

`BrLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10` |
| `bankCode` | `string` | Required | The 3-digit bank code, with leading zeros.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `branchNumber` | `string` | Required | The bank account branch number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `4` |
| `ispb` | `string \| undefined` | Optional | The 8-digit ISPB, with leading zeros.<br><br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `8` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BrLocalAccountIdentification1 } from 'adyenlib';

const brLocalAccountIdentification1: BrLocalAccountIdentification1 = {
  accountNumber: 'accountNumber8',
  bankCode: 'bankCode0',
  branchNumber: 'branchNumber0',
  ispb: 'ispb4',
  type: 'brLocal',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

