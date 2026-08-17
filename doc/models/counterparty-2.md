
# Counterparty 2

## Structure

`Counterparty2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolder` | [`AccountHolder11`](../../doc/models/account-holder-11.md) | Required | Contains the full name of the person or entity that receives the payment funds). |
| `accountIdentification` | [`AccountIdentification1`](../../doc/models/account-identification-1.md) | Required | Contains the account number to which the payment funds are sent. |

## Example

```ts
import { Counterparty2 } from 'adyen';

const counterparty2: Counterparty2 = {
  accountHolder: {
    fullName: 'John Doe',
  },
  accountIdentification: {
    type: 'AccountIdentification1',
  },
};
```

