
# Payment Account Status

*This model accepts additional fields of type unknown.*

## Structure

`PaymentAccountStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentInstrumentData` | [`PaymentInstrumentData2 \| undefined`](../../doc/models/payment-instrument-data-2.md) | Optional | - |
| `currentBalance` | `number \| undefined` | Optional | Balance of an account after processing of the transaction.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `currency` | `string \| undefined` | Optional | Currency of a monetary amount.<br><br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |
| `paymentAcquirerData` | [`PaymentAcquirerData1 \| undefined`](../../doc/models/payment-acquirer-data-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  EntryMode,
  IdentificationType11,
  PaymentAccountStatus,
  PaymentInstrumentType11,
  StoredValueAccountType1,
  TrackFormat1,
} from 'adyenlib';

const paymentAccountStatus: PaymentAccountStatus = {
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
  currentBalance: 32.76,
  currency: 'Currency0',
  paymentAcquirerData: {
    merchantId: 'MerchantID6',
    acquirerPoiid: 'AcquirerPOIID4',
    acquirerId: 238,
    acquirerTransactionId: {
      transactionId: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    approvalCode: 'ApprovalCode8',
    hostReconciliationId: 'HostReconciliationID8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

