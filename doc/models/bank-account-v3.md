
# Bank Account V3

*This model accepts additional fields of type unknown.*

## Structure

`BankAccountV3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolder` | [`PartyIdentification`](../../doc/models/party-identification.md) | Required | - |
| `accountIdentification` | [`BankAccountV3AccountIdentification`](../../doc/models/containers/bank-account-v3-account-identification.md) | Required | This is a container for one-of cases. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | The unique token that identifies the stored bank account details of the counterparty for a payout. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BankAccountV3, Type413 } from 'adyenlib';

const bankAccountV3: BankAccountV3 = {
  accountHolder: {
    address: {
      country: 'country0',
      city: 'city6',
      line1: 'line18',
      line2: 'line20',
      postalCode: 'postalCode8',
      stateOrProvince: 'stateOrProvince4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    dateOfBirth: '2016-03-13T12:52:32.123Z',
    email: 'email6',
    firstName: 'firstName4',
    fullName: 'fullName0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  accountIdentification: {
    accountNumber: 'accountNumber4',
    bsbCode: 'bsbCode8',
    type: Type413.AuLocal,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  storedPaymentMethodId: 'storedPaymentMethodId0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

