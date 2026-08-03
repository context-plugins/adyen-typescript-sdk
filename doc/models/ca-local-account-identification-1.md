
# Ca Local Account Identification 1

*This model accepts additional fields of type unknown.*

## Structure

`CaLocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The 5- to 12-digit bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `12` |
| `accountType` | [`AccountType \| undefined`](../../doc/models/account-type.md) | Optional | - |
| `institutionNumber` | `string` | Required | The 3-digit institution number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `3` |
| `transitNumber` | `string` | Required | The 5-digit transit number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `5` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AccountType, CaLocalAccountIdentification1 } from 'adyenlib';

const caLocalAccountIdentification1: CaLocalAccountIdentification1 = {
  accountNumber: 'accountNumber6',
  institutionNumber: 'institutionNumber2',
  transitNumber: 'transitNumber4',
  accountType: AccountType.Checking,
  type: 'caLocal',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

