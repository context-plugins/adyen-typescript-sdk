
# Card Acquisition Response 2

Content of the Card Acquisition Response message.

## Structure

`CardAcquisitionResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |
| `saleData` | [`SaleData1`](../../doc/models/sale-data-1.md) | Required | Data related to the Sale System. |
| `pOIData` | [`POIData1`](../../doc/models/poi-data-1.md) | Required | Data related to the POI System. |
| `paymentBrand` | `string[] \| undefined` | Optional | Type of payment card.<br>Brands available for payment by the card and not chosen by the Customer.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `paymentInstrumentData` | [`PaymentInstrumentData1 \| undefined`](../../doc/models/payment-instrument-data-1.md) | Optional | Data related to the instrument of payment for the transaction.<br>If this type of payment card is configured to send information if the CardAcquisition response. |
| `loyaltyAccount` | [`LoyaltyAccount[] \| undefined`](../../doc/models/loyalty-account.md) | Optional | Data related to the loyalty System. |

## Example

```ts
import {
  CardAcquisitionResponse2,
  EntryModeEnum,
  ErrorCondition1Enum,
  IdentificationSupport1Enum,
  IdentificationType11Enum,
  PaymentInstrumentType11Enum,
  Result11Enum,
  StoredValueAccountType1Enum,
  TrackFormat1Enum,
} from 'adyen';

const cardAcquisitionResponse2: CardAcquisitionResponse2 = {
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
  saleData: {
    saleTransactionID: {
      transactionID: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
    },
    operatorID: 'OperatorID8',
    operatorLanguage: 'OperatorLanguage2',
    shiftNumber: 'ShiftNumber0',
    saleReferenceID: 'SaleReferenceID8',
    saleTerminalData: {
      totalsGroupID: 'TotalsGroupID4',
    },
  },
  pOIData: {
    pOITransactionID: {
      transactionID: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
    },
    pOIReconciliationID: 52,
  },
  paymentBrand: [
    'PaymentBrand3',
    'PaymentBrand4'
  ],
  paymentInstrumentData: {
    paymentInstrumentType: PaymentInstrumentType11Enum.Cash,
    protectedCardData: 'ProtectedCardData8',
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
  },
  loyaltyAccount: [
    {
      loyaltyAccountID: {
        entryMode: [
          EntryModeEnum.File
        ],
        identificationType: IdentificationType11Enum.ISOTrack2,
        loyaltyID: 'LoyaltyID4',
        identificationSupport: IdentificationSupport1Enum.HybridCard,
      },
      loyaltyBrand: 'LoyaltyBrand0',
    },
    {
      loyaltyAccountID: {
        entryMode: [
          EntryModeEnum.File
        ],
        identificationType: IdentificationType11Enum.ISOTrack2,
        loyaltyID: 'LoyaltyID4',
        identificationSupport: IdentificationSupport1Enum.HybridCard,
      },
      loyaltyBrand: 'LoyaltyBrand0',
    },
    {
      loyaltyAccountID: {
        entryMode: [
          EntryModeEnum.File
        ],
        identificationType: IdentificationType11Enum.ISOTrack2,
        loyaltyID: 'LoyaltyID4',
        identificationSupport: IdentificationSupport1Enum.HybridCard,
      },
      loyaltyBrand: 'LoyaltyBrand0',
    }
  ],
};
```

