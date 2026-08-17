
# CA Local Account Identification

## Structure

`CALocalAccountIdentification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 5- to 12-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `12` |
| `accountType` | [`AccountType2Enum \| undefined`](../../doc/models/account-type-2-enum.md) | Optional | The bank account type.<br><br>Possible values: **checking** or **savings**. Defaults to **checking**.<br><br>**Default**: `AccountType2Enum.Checking` |
| `institutionNumber` | `string` | Required | The 3-digit institution number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `transitNumber` | `string` | Required | The 5-digit transit number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `5` |
| `type` | `string` | Required, Constant | **caLocal**<br><br>**Value**: `'caLocal'` |

## Example

```ts
import { AccountType2Enum, CALocalAccountIdentification } from 'adyen';

const cALocalAccountIdentification: CALocalAccountIdentification = {
  accountNumber: 'accountNumber6',
  institutionNumber: 'institutionNumber2',
  transitNumber: 'transitNumber4',
  type: 'caLocal',
  accountType: AccountType2Enum.Checking,
};
```

