
# Mandate Bank Account 2

Contains information to identify the counterparty.

## Structure

`MandateBankAccount2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolder` | [`MandatePartyIdentification2`](../../doc/models/mandate-party-identification-2.md) | Required | Contains information about the owner of the counterparty bank account. |
| `accountIdentification` | [`MandateAccountIdentification2`](../../doc/models/mandate-account-identification-2.md) | Required | Contains the bank account details of the counterparty. The fields required in this object depend on the country of the bank account and the currency of the transfer. |

## Example

```ts
import { MandateBankAccount2 } from 'adyen';

const mandateBankAccount2: MandateBankAccount2 = {
  accountHolder: {
    fullName: 'fullName0',
  },
  accountIdentification: {
    type: 'MandateAccountIdentification2',
  },
};
```

