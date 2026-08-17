
# Payment Account Status

## Structure

`PaymentAccountStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentInstrumentData` | [`PaymentInstrumentData \| undefined`](../../doc/models/payment-instrument-data.md) | Optional | Data related to the instrument of payment for the transaction.<br>Sent in the result of the payment transaction. For a card, it could also be sent in the `CardAcquisition` response, to be processed by the Sale System. |
| `currentBalance` | `number \| undefined` | Optional | Balance of an account after processing of the transaction.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `currency` | `string \| undefined` | Optional | Currency of a monetary amount.<br><br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |
| `paymentAcquirerData` | [`PaymentAcquirerData \| undefined`](../../doc/models/payment-acquirer-data.md) | Optional | Data related to the response from the payment Acquirer. |

## Example

```ts
import {
  EntryModeEnum,
  IdentificationType11Enum,
  PaymentAccountStatus,
  PaymentInstrumentType11Enum,
  StoredValueAccountType1Enum,
  TrackFormat1Enum,
} from 'adyen';

const paymentAccountStatus: PaymentAccountStatus = {
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
  currentBalance: 32.76,
  currency: 'Currency0',
  paymentAcquirerData: {
    merchantID: 'MerchantID6',
    acquirerPOIID: 'AcquirerPOIID4',
    acquirerID: 238,
    acquirerTransactionID: {
      transactionID: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
    },
    approvalCode: 'ApprovalCode8',
    hostReconciliationID: 'HostReconciliationID8',
  },
};
```

