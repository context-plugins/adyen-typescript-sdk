
# Transfer Notification Counter Party

## Structure

`TransferNotificationCounterParty`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string \| undefined` | Optional | The unique identifier of the counterparty [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id). |
| `bankAccount` | [`BankAccountV31 \| undefined`](../../doc/models/bank-account-v31.md) | Optional | Contains information about the counterparty bank account. |
| `card` | [`Card12 \| undefined`](../../doc/models/card-12.md) | Optional | Contains information about the counterparty card. |
| `merchant` | [`TransferNotificationMerchantData2 \| undefined`](../../doc/models/transfer-notification-merchant-data-2.md) | Optional | Contains information about the merchant. |
| `transferInstrumentId` | `string \| undefined` | Optional | The unique identifier of the counterparty [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id). |

## Example

```ts
import { TransferNotificationCounterParty } from 'adyen';

const transferNotificationCounterParty: TransferNotificationCounterParty = {
  balanceAccountId: 'balanceAccountId2',
  bankAccount: {
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
    },
    accountIdentification: {
      accountNumber: 'accountNumber4',
      bsbCode: 'bsbCode8',
      type: 'type2',
    },
    storedPaymentMethodId: 'storedPaymentMethodId2',
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
      },
      dateOfBirth: '2016-03-13T12:52:32.123Z',
      email: 'email0',
      firstName: 'firstName8',
      fullName: 'fullName6',
    },
    cardIdentification: {
      expiryMonth: 'expiryMonth2',
      expiryYear: 'expiryYear2',
      issueNumber: 'issueNumber0',
      number: 'number6',
      startMonth: 'startMonth8',
    },
  },
  merchant: {
    acquirerId: 'acquirerId6',
    city: 'city4',
    country: 'country8',
    countryCode: 'countryCode0',
    mcc: 'mcc4',
  },
  transferInstrumentId: 'transferInstrumentId8',
};
```

