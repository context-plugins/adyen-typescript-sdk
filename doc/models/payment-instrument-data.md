
# Payment Instrument Data

Data related to the instrument of payment for the transaction.
Sent in the result of the payment transaction. For a card, it could also be sent in the `CardAcquisition` response, to be processed by the Sale System.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentInstrumentData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentInstrumentType` | [`PaymentInstrumentType11`](../../doc/models/payment-instrument-type-11.md) | Required | - |
| `protectedCardData` | `string \| undefined` | Optional | Sensitive information related to the payment card, protected by CMS.<br>SensitiveCardData protected by CMS EnvelopedData. |
| `cardData` | [`CardData2 \| undefined`](../../doc/models/card-data-2.md) | Optional | - |
| `checkData` | [`CheckData2 \| undefined`](../../doc/models/check-data-2.md) | Optional | - |
| `mobileData` | [`MobileData2 \| undefined`](../../doc/models/mobile-data-2.md) | Optional | - |
| `storedValueAccountId` | [`StoredValueAccountId2 \| undefined`](../../doc/models/stored-value-account-id-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  EntryMode,
  IdentificationType11,
  PaymentInstrumentData,
  PaymentInstrumentType11,
  StoredValueAccountType1,
  TrackFormat1,
} from 'adyen';

const paymentInstrumentData: PaymentInstrumentData = {
  paymentInstrumentType: PaymentInstrumentType11.Card,
  protectedCardData: 'ProtectedCardData2',
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
};
```

