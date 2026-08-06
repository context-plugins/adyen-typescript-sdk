
# Cardacquisition Response 4

*This model accepts additional fields of type unknown.*

## Structure

`CardacquisitionResponse4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response3`](../../doc/models/response-3.md) | Required | - |
| `saleData` | [`SaleData2`](../../doc/models/sale-data-2.md) | Required | - |
| `poiData` | [`PoiData2`](../../doc/models/poi-data-2.md) | Required | - |
| `paymentBrand` | `string[] \| undefined` | Optional | Type of payment card.<br>Brands available for payment by the card and not chosen by the Customer.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `paymentInstrumentData` | [`PaymentInstrumentData2 \| undefined`](../../doc/models/payment-instrument-data-2.md) | Optional | - |
| `loyaltyAccount` | [`LoyaltyAccount[] \| undefined`](../../doc/models/loyalty-account.md) | Optional | Data related to the loyalty System. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CardacquisitionResponse4,
  EntryMode,
  ErrorCondition1,
  IdentificationSupport1,
  IdentificationType11,
  PaymentInstrumentType11,
  Result11,
  StoredValueAccountType1,
  TrackFormat1,
} from 'adyen';

const cardacquisitionResponse4: CardacquisitionResponse4 = {
  response: {
    result: Result11.Partial,
    errorCondition: ErrorCondition1.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  saleData: {
    saleTransactionId: {
      transactionId: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    operatorId: 'OperatorID8',
    operatorLanguage: 'OperatorLanguage2',
    shiftNumber: 'ShiftNumber0',
    saleReferenceId: 'SaleReferenceID8',
    saleTerminalData: {
      totalsGroupId: 'TotalsGroupID4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  poiData: {
    poiTransactionId: {
      transactionId: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    poiReconciliationId: 52,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  paymentBrand: [
    'PaymentBrand7',
    'PaymentBrand8'
  ],
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
  loyaltyAccount: [
    {
      loyaltyAccountId: {
        entryMode: [
          EntryMode.File
        ],
        identificationType: IdentificationType11.IsoTrack2,
        loyaltyId: 'LoyaltyID4',
        identificationSupport: IdentificationSupport1.HybridCard,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      loyaltyBrand: 'LoyaltyBrand0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      loyaltyAccountId: {
        entryMode: [
          EntryMode.File
        ],
        identificationType: IdentificationType11.IsoTrack2,
        loyaltyId: 'LoyaltyID4',
        identificationSupport: IdentificationSupport1.HybridCard,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      loyaltyBrand: 'LoyaltyBrand0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      loyaltyAccountId: {
        entryMode: [
          EntryMode.File
        ],
        identificationType: IdentificationType11.IsoTrack2,
        loyaltyId: 'LoyaltyID4',
        identificationSupport: IdentificationSupport1.HybridCard,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      loyaltyBrand: 'LoyaltyBrand0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

