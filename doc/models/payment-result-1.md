
# Payment Result 1

## Structure

`PaymentResult1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentType` | [`PaymentType1Enum \| undefined`](../../doc/models/payment-type-1-enum.md) | Optional | Type of payment transaction. Elements requested by the Sale System that are related to the payment only.<br>Possible values:<br><br>* **CashAdvance**<br>* **CashDeposit**<br>* **Completion**<br>* **FirstReservation**<br>* **Instalment**<br>* **IssuerInstalment**<br>* **Normal**<br>* **OneTimeReservation**<br>* **PaidOut**<br>* **Recurring**<br>* **Refund**<br>* **UpdateReservation** |
| `paymentInstrumentData` | [`PaymentInstrumentData \| undefined`](../../doc/models/payment-instrument-data.md) | Optional | Data related to the instrument of payment for the transaction.<br>Sent in the result of the payment transaction. For a card, it could also be sent in the `CardAcquisition` response, to be processed by the Sale System. |
| `amountsResp` | [`AmountsResp1 \| undefined`](../../doc/models/amounts-resp-1.md) | Optional | Various amounts related to the payment response from the POI System. Amounts approved by the POI and the Acquirer for the payment and loyalty transaction, containing:<br><br>* The authorised amount to be paid.<br>* The amount of the rebates.<br>* The amount of financial fees.<br>* The cash back part of the requested amount for a payment with cash back.<br>* The tip part of the requested amount for a payment with tip. |
| `instalment` | [`Instalment1 \| undefined`](../../doc/models/instalment-1.md) | Optional | Information related an instalment transaction. To request an instalment to the issuer, or to make individual instalments of a payment transaction. |
| `currencyConversion` | [`CurrencyConversion[] \| undefined`](../../doc/models/currency-conversion.md) | Optional | Information related to a currency conversion. A currency conversion occurred in the payment, and the merchant needs to know information related to this conversion (e.g. to print on the sale receipt). |
| `merchantOverrideFlag` | `boolean \| undefined` | Optional | Indicates that the Merchant forced the result of the payment to successful. Allows the Sale System to be sure that the payment has been forced.<br><br>**Default**: `false` |
| `capturedSignature` | [`CapturedSignature1 \| undefined`](../../doc/models/captured-signature-1.md) | Optional | Numeric value of a handwritten signature. Contains the value of a handwritten signature, e.g. the signature of a cardholder on the merchant payment receipt. Only one format of the signature is allowed:<br><br>* The size of the pad area where the signature is written, given with the maximum abscissa and ordinate values.<br>* The sequence of coordinates where the pen changes direction or lift. |
| `protectedSignature` | `string \| undefined` | Optional | Numeric value of a handwritten signature. Contains the value of a handwritten signature, e.g. the signature of a cardholder on the merchant payment receipt. The format before encryption is the encoded data structure CapturedSignature. The data structure before encryption includes the start and end tags for an XML encoding, the identifier and length bytes for an ASN.1 encoding, and the complete member ProtectedSignature for a JSON encoding. |
| `customerLanguage` | `string \| undefined` | Optional | The language of the customer that was used on the terminal screen or in text printed by the terminal. Format: two-character [ISO 639:2023](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format.<br><br>**Constraints**: *Pattern*: `^[a-z]{2,2}$` |
| `onlineFlag` | `boolean \| undefined` | Optional | Indicate that the payment transaction processing has required the approval of a host. Allows the Sale System to know if the payment was online or offline.<br><br>**Default**: `true` |
| `authenticationMethod` | [`AuthenticationMethod1Enum[] \| undefined`](../../doc/models/authentication-method-1-enum.md) | Optional | Method for customer authentication. Allows the Sale System informed about customer authentication for the payment transaction.<br>Possible values:<br><br>* **Bypass**<br>* **ManualVerification**<br>* **MerchantAuthentication**<br>* **OfflinePIN**<br>* **OnlinePIN**<br>* **PaperSignature**<br>* **SecureCertificate**<br>* **SecureNoCertificate**<br>* **SecuredChannel**<br>* **SignatureCapture**<br>* **UnknownMethod** |
| `validityDate` | `string \| undefined` | Optional | End of the validity period for the reservation, for the first reservation, and the reservation updates as well. |
| `paymentAcquirerData` | [`PaymentAcquirerData \| undefined`](../../doc/models/payment-acquirer-data.md) | Optional | Data related to the response from the payment Acquirer. |

## Example

```ts
import {
  EntryModeEnum,
  IdentificationType11Enum,
  InstalmentTypeEnum,
  PaymentInstrumentType11Enum,
  PaymentResult1,
  PaymentType1Enum,
  PeriodUnit1Enum,
  StoredValueAccountType1Enum,
  TrackFormat1Enum,
} from 'adyen';

const paymentResult1: PaymentResult1 = {
  paymentType: PaymentType1Enum.IssuerInstalment,
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
  amountsResp: {
    authorizedAmount: 133.28,
    currency: 'Currency0',
    totalRebatesAmount: 120.04,
    totalFeesAmount: 181.08,
    cashBackAmount: 206.58,
    tipAmount: 86.96,
  },
  instalment: {
    instalmentType: InstalmentTypeEnum.DeferredInstalments,
    sequenceNumber: 106,
    planID: 'PlanID4',
    period: 70,
    periodUnit: PeriodUnit1Enum.Monthly,
  },
  currencyConversion: [
    {
      convertedAmount: {
        amountValue: 81.82,
        currency: 'Currency0',
      },
      customerApprovedFlag: false,
      rate: 175.8,
      markup: 100.86,
      commission: 197.78,
      declaration: 'Declaration4',
    },
    {
      convertedAmount: {
        amountValue: 81.82,
        currency: 'Currency0',
      },
      customerApprovedFlag: false,
      rate: 175.8,
      markup: 100.86,
      commission: 197.78,
      declaration: 'Declaration4',
    }
  ],
  merchantOverrideFlag: false,
  onlineFlag: true,
};
```

