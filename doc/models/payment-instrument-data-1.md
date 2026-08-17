
# Payment Instrument Data 1

Data related to the instrument of payment for the transaction.
If this type of payment card is configured to send information if the CardAcquisition response.

## Structure

`PaymentInstrumentData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentInstrumentType` | [`PaymentInstrumentType11Enum`](../../doc/models/payment-instrument-type-11-enum.md) | Required | Type of payment instrument.<br>Possible values:<br><br>* **Card**<br>* **Cash**<br>* **Check**<br>* **Mobile**<br>* **StoredValue** |
| `protectedCardData` | `string \| undefined` | Optional | Sensitive information related to the payment card, protected by CMS.<br>SensitiveCardData protected by CMS EnvelopedData. |
| `cardData` | [`CardData1 \| undefined`](../../doc/models/card-data-1.md) | Optional | Information related to the payment card used for the transaction.<br>If PaymentInstrumentType is Card. |
| `checkData` | [`CheckData1 \| undefined`](../../doc/models/check-data-1.md) | Optional | Information related to the paper check used for the transaction.<br>If PaymentInstrumentType is Check. |
| `mobileData` | [`MobileData1 \| undefined`](../../doc/models/mobile-data-1.md) | Optional | Information related to the mobile for the payment transaction.<br>If PaymentInstrumentType is Mobile. |
| `storedValueAccountID` | [`StoredValueAccountID \| undefined`](../../doc/models/stored-value-account-id.md) | Optional | Identification of the stored value account or the stored value card and the associated product sold by the Sale System for stored value requests. |

## Example

```ts
import {
  EntryModeEnum,
  IdentificationType11Enum,
  PaymentInstrumentData1,
  PaymentInstrumentType11Enum,
  StoredValueAccountType1Enum,
  TrackFormat1Enum,
} from 'adyen';

const paymentInstrumentData1: PaymentInstrumentData1 = {
  paymentInstrumentType: PaymentInstrumentType11Enum.Check,
  protectedCardData: 'ProtectedCardData6',
  cardData: {
    paymentBrand: 'PaymentBrand0',
    maskedPan: 'MaskedPan0',
    paymentAccountRef: 'PaymentAccountRef8',
    entryMode: [
      EntryModeEnum.Manual,
      EntryModeEnum.Keyed
    ],
    cardCountryCode: 3,
  },
  checkData: {
    bankID: 'BankID0',
    accountNumber: 'AccountNumber6',
    checkNumber: 'CheckNumber2',
    trackData: {
      trackValue: 'TrackValue6',
      trackNumb: 3,
      trackFormat: TrackFormat1Enum.JISII,
    },
    checkCardNumber: 'CheckCardNumber6',
  },
  mobileData: {
    mobileCountryCode: 3,
    mobileNetworkCode: 3,
    maskedMSISDN: 22,
    geolocation: {
      geographicCoordinates: {
        latitude: 'Latitude4',
        longitude: 'Longitude2',
      },
      uTMCoordinates: {
        uTMZone: 'UTMZone6',
        uTMEastward: 'UTMEastward0',
        uTMNorthward: 'UTMNorthward0',
      },
    },
    protectedMobileData: 'ProtectedMobileData0',
  },
  storedValueAccountID: {
    storedValueAccountType: StoredValueAccountType1Enum.PhoneCard,
    entryMode: [
      EntryModeEnum.MagStripe,
      EntryModeEnum.Scanned
    ],
    identificationType: IdentificationType11Enum.PhoneNumber,
    storedValueID: 'StoredValueID8',
    storedValueProvider: 'StoredValueProvider4',
    ownerName: 'OwnerName0',
    expiryDate: 4,
  },
};
```

