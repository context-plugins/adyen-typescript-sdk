
# Bank Account 11

Contains information about the bank account.

## Structure

`BankAccount11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountIdentification` | [`BankAccount11AccountIdentification`](../../doc/models/containers/bank-account-11-account-identification.md) | Required | This is a container for one-of cases. |

## Example

```ts
import { BankAccount11 } from 'adyen';

const bankAccount11: BankAccount11 = {
  accountIdentification: {
    accountNumber: 'accountNumber4',
    bsbCode: 'bsbCode8',
    type: 'auLocal',
  },
};
```

