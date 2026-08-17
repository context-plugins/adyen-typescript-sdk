
# Payment Account Req

## Structure

`PaymentAccountReq`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountType` | [`AccountType12Enum \| undefined`](../../doc/models/account-type-12-enum.md) | Optional | Type of cardholder account used for the transaction. Allows a cardholder to select the type of account used for the transaction.<br>Possible values:<br><br>* **CardTotals**<br>* **Checking**<br>* **CreditCard**<br>* **Default**<br>* **EpurseCard**<br>* **Investment**<br>* **Savings**<br>* **Universal** |
| `cardAcquisitionReference` | [`TransactionIDType \| undefined`](../../doc/models/transaction-id-type.md) | Optional | Identification of a transaction for the Sale System or the POI System. |
| `paymentInstrumentData` | [`PaymentInstrumentData \| undefined`](../../doc/models/payment-instrument-data.md) | Optional | Data related to the instrument of payment for the transaction.<br>Sent in the result of the payment transaction. For a card, it could also be sent in the `CardAcquisition` response, to be processed by the Sale System. |

## Example

```ts
import {
  AccountType12Enum,
  EntryModeEnum,
  IdentificationType11Enum,
  PaymentAccountReq,
  PaymentInstrumentType11Enum,
  StoredValueAccountType1Enum,
  TrackFormat1Enum,
} from 'adyen';

const paymentAccountReq: PaymentAccountReq = {
  accountType: AccountType12Enum.CardTotals,
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
};
```

