
# CA Local Account Identification 1

## Structure

`CALocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 5- to 12-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `12` |
| `accountType` | [`AccountType2Enum \| undefined`](../../doc/models/account-type-2-enum.md) | Optional | The bank account type.<br><br>Possible values: **checking** or **savings**. Defaults to **checking**. |
| `institutionNumber` | `string` | Required | The 3-digit institution number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `transitNumber` | `string` | Required | The 5-digit transit number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `5` |

## Example

```ts
import { AccountType2Enum, CALocalAccountIdentification1 } from 'adyen';

const cALocalAccountIdentification1: CALocalAccountIdentification1 = {
  accountNumber: 'accountNumber4',
  institutionNumber: 'institutionNumber2',
  transitNumber: 'transitNumber4',
  accountType: AccountType2Enum.Checking,
  type: 'caLocal',
};
```

