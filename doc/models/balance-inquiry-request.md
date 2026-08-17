
# Balance Inquiry Request

It conveys Information related to the account for which a Balance Inquiry is requested.
Content of the Balance Inquiry Request message.

## Structure

`BalanceInquiryRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentAccountReq` | [`PaymentAccountReq2 \| undefined`](../../doc/models/payment-account-req-2.md) | Optional | Data related to the account pointed by the payment card. |
| `loyaltyAccountReq` | [`LoyaltyAccountReq2 \| undefined`](../../doc/models/loyalty-account-req-2.md) | Optional | Data related to a requested Loyalty program or account. |

## Example

```ts
import {
  AccountType12Enum,
  BalanceInquiryRequest,
  EntryModeEnum,
  IdentificationSupport1Enum,
  IdentificationType11Enum,
  PaymentInstrumentType11Enum,
  StoredValueAccountType1Enum,
  TrackFormat1Enum,
} from 'adyen';

const balanceInquiryRequest: BalanceInquiryRequest = {
  paymentAccountReq: {
    accountType: AccountType12Enum.Checking,
    cardAcquisitionReference: {
      transactionID: 'TransactionID8',
      timeStamp: '2016-03-13T12:52:32.123Z',
    },
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
  },
  loyaltyAccountReq: {
    cardAcquisitionReference: {
      transactionID: 'TransactionID8',
      timeStamp: '2016-03-13T12:52:32.123Z',
    },
    loyaltyAccountID: {
      entryMode: [
        EntryModeEnum.File
      ],
      identificationType: IdentificationType11Enum.ISOTrack2,
      loyaltyID: 'LoyaltyID4',
      identificationSupport: IdentificationSupport1Enum.HybridCard,
    },
  },
};
```

