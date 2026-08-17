
# BR Local Account Identification 1

## Structure

`BRLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `10` |
| `bankCode` | `string` | Required | The 3-digit bank code, with leading zeros.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `branchNumber` | `string` | Required | The bank account branch number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `4` |
| `ispb` | `string \| undefined` | Optional | The 8-digit ISPB, with leading zeros.<br><br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `8` |

## Example

```ts
import { BRLocalAccountIdentification1 } from 'adyen';

const bRLocalAccountIdentification1: BRLocalAccountIdentification1 = {
  accountNumber: 'accountNumber8',
  bankCode: 'bankCode0',
  branchNumber: 'branchNumber0',
  ispb: 'ispb4',
  type: 'brLocal',
};
```

