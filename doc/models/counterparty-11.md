
# Counterparty 11

Contains information about the party that receives the payment funds.

## Structure

`Counterparty11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolder` | [`AccountHolder11`](../../doc/models/account-holder-11.md) | Required | Contains the full name of the person or entity that receives the payment funds). |
| `accountIdentification` | [`AccountIdentification1`](../../doc/models/account-identification-1.md) | Required | Contains the account number to which the payment funds are sent. |

## Example

```ts
import { Counterparty11 } from 'adyen';

const counterparty11: Counterparty11 = {
  accountHolder: {
    fullName: 'John Doe',
  },
  accountIdentification: {
    type: 'AccountIdentification1',
  },
};
```

