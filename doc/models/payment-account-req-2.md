
# Payment Account Req 2

Data related to the account pointed by the payment card.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentAccountReq2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountType` | [`AccountType13 \| undefined`](../../doc/models/account-type-13.md) | Optional | - |
| `cardAcquisitionReference` | [`CardAcquisitionReference \| undefined`](../../doc/models/card-acquisition-reference.md) | Optional | - |
| `paymentInstrumentData` | [`PaymentInstrumentData2 \| undefined`](../../doc/models/payment-instrument-data-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AccountType13,
  EntryMode,
  IdentificationType11,
  PaymentAccountReq2,
  PaymentInstrumentType11,
  StoredValueAccountType1,
  TrackFormat1,
} from 'adyen';

const paymentAccountReq2: PaymentAccountReq2 = {
  accountType: AccountType13.CardTotals,
  cardAcquisitionReference: {
    transactionId: 'TransactionID8',
    timeStamp: '2016-03-13T12:52:32.123Z',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  paymentInstrumentData: {
    paymentInstrumentType: PaymentInstrumentType11.Cash,
    protectedCardData: 'ProtectedCardData8',
    cardData: {
      paymentBrand: 'PaymentBrand0',
      maskedPan: 'MaskedPan0',
      paymentAccountRef: 'PaymentAccountRef8',
      entryMode: [
        EntryMode.Manual,
        EntryMode.Keyed
      ],
      cardCountryCode: 3,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    checkData: {
      bankId: 'BankID0',
      accountNumber: 'AccountNumber6',
      checkNumber: 'CheckNumber2',
      trackData: {
        trackValue: 'TrackValue6',
        trackNumb: 3,
        trackFormat: TrackFormat1.Jisii,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      checkCardNumber: 'CheckCardNumber6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    mobileData: {
      mobileCountryCode: 3,
      mobileNetworkCode: 3,
      maskedMsisdn: 22,
      geolocation: {
        geographicCoordinates: {
          latitude: 'Latitude4',
          longitude: 'Longitude2',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        utmCoordinates: {
          utmZone: 'UTMZone6',
          utmEastward: 'UTMEastward0',
          utmNorthward: 'UTMNorthward0',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      protectedMobileData: 'ProtectedMobileData0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    storedValueAccountId: {
      storedValueAccountType: StoredValueAccountType1.PhoneCard,
      entryMode: [
        EntryMode.MagStripe,
        EntryMode.Scanned
      ],
      identificationType: IdentificationType11.PhoneNumber,
      storedValueId: 'StoredValueID8',
      storedValueProvider: 'StoredValueProvider4',
      ownerName: 'OwnerName0',
      expiryDate: 4,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

