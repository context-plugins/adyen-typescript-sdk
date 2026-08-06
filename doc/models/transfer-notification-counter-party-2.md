
# Transfer Notification Counter Party 2

The other party in the transfer.

*This model accepts additional fields of type unknown.*

## Structure

`TransferNotificationCounterParty2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string \| undefined` | Optional | The unique identifier of the counterparty [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id). |
| `bankAccount` | [`BankAccountV3 \| undefined`](../../doc/models/bank-account-v3.md) | Optional | - |
| `card` | [`Card4 \| undefined`](../../doc/models/card-4.md) | Optional | - |
| `merchant` | [`TransferNotificationMerchantData \| undefined`](../../doc/models/transfer-notification-merchant-data.md) | Optional | - |
| `transferInstrumentId` | `string \| undefined` | Optional | The unique identifier of the counterparty [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TransferNotificationCounterParty2, Type413 } from 'adyen';

const transferNotificationCounterParty2: TransferNotificationCounterParty2 = {
  balanceAccountId: 'balanceAccountId6',
  bankAccount: {
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
    storedPaymentMethodId: 'storedPaymentMethodId2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  card: {
    cardHolder: {
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
      email: 'email0',
      firstName: 'firstName8',
      fullName: 'fullName6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    cardIdentification: {
      expiryMonth: 'expiryMonth2',
      expiryYear: 'expiryYear2',
      issueNumber: 'issueNumber0',
      number: 'number6',
      startMonth: 'startMonth8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  merchant: {
    acquirerId: 'acquirerId6',
    city: 'city4',
    country: 'country8',
    countryCode: 'countryCode0',
    mcc: 'mcc4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  transferInstrumentId: 'transferInstrumentId0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

