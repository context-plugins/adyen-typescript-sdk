
# Counterparty V3

## Structure

`CounterpartyV3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balanceAccountId` | `string \| undefined` | Optional | The unique identifier of the counterparty [balance account](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id). |
| `bankAccount` | [`BankAccountV31 \| undefined`](../../doc/models/bank-account-v31.md) | Optional | Contains information about the counterparty bank account. |
| `card` | [`Card12 \| undefined`](../../doc/models/card-12.md) | Optional | Contains information about the counterparty card. |
| `merchant` | [`MerchantData2 \| undefined`](../../doc/models/merchant-data-2.md) | Optional | Contains information about the merchant. |
| `transferInstrumentId` | `string \| undefined` | Optional | The unique identifier of the counterparty [transfer instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id). |

## Example

```ts
import { CounterpartyV3 } from 'adyen';

const counterpartyV3: CounterpartyV3 = {
  balanceAccountId: 'balanceAccountId4',
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
    mcc: 'mcc4',
    merchantId: 'merchantId0',
    nameLocation: {
      city: 'city6',
      country: 'country8',
      countryOfOrigin: 'countryOfOrigin0',
      name: 'name4',
      rawData: 'rawData0',
    },
    postalCode: 'postalCode6',
  },
  transferInstrumentId: 'transferInstrumentId0',
};
```

