
# Bank Account 2

## Structure

`BankAccount2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountIdentification` | [`BankAccount2AccountIdentification`](../../doc/models/containers/bank-account-2-account-identification.md) | Required | This is a container for one-of cases. |

## Example

```ts
import { BankAccount2 } from 'adyen';

const bankAccount2: BankAccount2 = {
  accountIdentification: {
    accountNumber: 'accountNumber4',
    bsbCode: 'bsbCode8',
    type: 'auLocal',
  },
};
```

