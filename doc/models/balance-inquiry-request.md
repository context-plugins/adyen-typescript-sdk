
# Balance Inquiry Request

It conveys Information related to the account for which a Balance Inquiry is requested.
Content of the Balance Inquiry Request message.

*This model accepts additional fields of type unknown.*

## Structure

`BalanceInquiryRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentAccountReq` | [`PaymentAccountReq \| undefined`](../../doc/models/payment-account-req.md) | Optional | - |
| `loyaltyAccountReq` | [`LoyaltyAccountReq \| undefined`](../../doc/models/loyalty-account-req.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AccountType13,
  BalanceInquiryRequest,
  EntryMode,
  IdentificationSupport1,
  IdentificationType11,
  PaymentInstrumentType11,
  StoredValueAccountType1,
  TrackFormat1,
} from 'adyen';

const balanceInquiryRequest: BalanceInquiryRequest = {
  paymentAccountReq: {
    accountType: AccountType13.Checking,
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
  },
  loyaltyAccountReq: {
    cardAcquisitionReference: {
      transactionId: 'TransactionID8',
      timeStamp: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
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
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

