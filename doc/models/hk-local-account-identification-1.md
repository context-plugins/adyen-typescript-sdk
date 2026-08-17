
# HK Local Account Identification 1

## Structure

`HKLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 9- to 17-digit bank account number, without separators or whitespace. Starts with the 3-digit branch code.<br><br>**Constraints**: *Minimum Length*: `9`, *Maximum Length*: `17` |
| `clearingCode` | `string` | Required | The 3-digit clearing code, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |

## Example

```ts
import { HKLocalAccountIdentification1 } from 'adyen';

const hKLocalAccountIdentification1: HKLocalAccountIdentification1 = {
  accountNumber: 'accountNumber0',
  clearingCode: 'clearingCode4',
  type: 'hkLocal',
};
```

