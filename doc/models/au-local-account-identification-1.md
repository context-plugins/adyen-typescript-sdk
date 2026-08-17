
# AU Local Account Identification 1

## Structure

`AULocalAccountIdentification1`

## Inherits From

[`BankAccountIdentification`](../../doc/models/bank-account-identification.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountNumber` | `string` | Required | The bank account number, without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `5`, *Maximum Length*: `9` |
| `bsbCode` | `string` | Required | The 6-digit [Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or whitespace.<br><br>**Constraints**: *Minimum Length*: `6`, *Maximum Length*: `6` |

## Example

```ts
import { AULocalAccountIdentification1 } from 'adyen';

const aULocalAccountIdentification1: AULocalAccountIdentification1 = {
  accountNumber: 'accountNumber6',
  bsbCode: 'bsbCode8',
  type: 'auLocal',
};
```

