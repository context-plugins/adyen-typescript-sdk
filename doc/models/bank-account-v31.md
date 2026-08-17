
# Bank Account V31

Contains information about the counterparty bank account.

## Structure

`BankAccountV31`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolder` | [`PartyIdentification3`](../../doc/models/party-identification-3.md) | Required | Information about the owner of the bank account. |
| `accountIdentification` | [`BankAccountV31AccountIdentification`](../../doc/models/containers/bank-account-v31-account-identification.md) | Required | This is a container for one-of cases. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | The unique token that identifies the stored bank account details of the counterparty for a payout. |

## Example

```ts
import { BankAccountV31, Type112Enum } from 'adyen';

const bankAccountV31: BankAccountV31 = {
  accountHolder: {
    address: {
      country: 'country0',
      city: 'city6',
      line1: 'line18',
      line2: 'line20',
      postalCode: 'postalCode8',
      stateOrProvince: 'stateOrProvince4',
    },
    dateOfBirth: '2016-03-13T12:52:32.123Z',
    email: 'email6',
    firstName: 'firstName4',
    fullName: 'fullName0',
    type: Type112Enum.Unknown,
  },
  accountIdentification: {
    accountNumber: 'accountNumber4',
    bsbCode: 'bsbCode8',
    type: 'auLocal',
  },
  storedPaymentMethodId: 'storedPaymentMethodId0',
};
```

