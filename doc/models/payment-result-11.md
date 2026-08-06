
# Payment Result 11

Data related to the result of a processed payment transaction.
If one data element is present.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentResult11`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentType` | [`PaymentType1 \| undefined`](../../doc/models/payment-type-1.md) | Optional | - |
| `paymentInstrumentData` | [`PaymentInstrumentData2 \| undefined`](../../doc/models/payment-instrument-data-2.md) | Optional | - |
| `amountsResp` | [`AmountsResp \| undefined`](../../doc/models/amounts-resp.md) | Optional | - |
| `instalment` | [`Instalment \| undefined`](../../doc/models/instalment.md) | Optional | - |
| `currencyConversion` | [`CurrencyConversion[] \| undefined`](../../doc/models/currency-conversion.md) | Optional | Information related to a currency conversion. A currency conversion occurred in the payment, and the merchant needs to know information related to this conversion (e.g. to print on the sale receipt). |
| `merchantOverrideFlag` | `boolean \| undefined` | Optional | Indicates that the Merchant forced the result of the payment to successful. Allows the Sale System to be sure that the payment has been forced.<br><br>**Default**: `false` |
| `capturedSignature` | [`CapturedSignature \| undefined`](../../doc/models/captured-signature.md) | Optional | - |
| `protectedSignature` | `string \| undefined` | Optional | Numeric value of a handwritten signature. Contains the value of a handwritten signature, e.g. the signature of a cardholder on the merchant payment receipt. The format before encryption is the encoded data structure CapturedSignature. The data structure before encryption includes the start and end tags for an XML encoding, the identifier and length bytes for an ASN.1 encoding, and the complete member ProtectedSignature for a JSON encoding. |
| `customerLanguage` | `string \| undefined` | Optional | The language of the customer that was used on the terminal screen or in text printed by the terminal. Format: two-character [ISO 639:2023](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format.<br><br>**Constraints**: *Pattern*: `^[a-z]{2,2}$` |
| `onlineFlag` | `boolean \| undefined` | Optional | Indicate that the payment transaction processing has required the approval of a host. Allows the Sale System to know if the payment was online or offline.<br><br>**Default**: `true` |
| `authenticationMethod` | [`AuthenticationMethod1[] \| undefined`](../../doc/models/authentication-method-1.md) | Optional | Method for customer authentication. Allows the Sale System informed about customer authentication for the payment transaction.<br>Possible values:<br><br>* **Bypass**<br>* **ManualVerification**<br>* **MerchantAuthentication**<br>* **OfflinePIN**<br>* **OnlinePIN**<br>* **PaperSignature**<br>* **SecureCertificate**<br>* **SecureNoCertificate**<br>* **SecuredChannel**<br>* **SignatureCapture**<br>* **UnknownMethod** |
| `validityDate` | `string \| undefined` | Optional | End of the validity period for the reservation, for the first reservation, and the reservation updates as well. |
| `paymentAcquirerData` | [`PaymentAcquirerData1 \| undefined`](../../doc/models/payment-acquirer-data-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  EntryMode,
  IdentificationType11,
  InstalmentType,
  PaymentInstrumentType11,
  PaymentResult11,
  PaymentType1,
  PeriodUnit1,
  StoredValueAccountType1,
  TrackFormat1,
} from 'adyen';

const paymentResult11: PaymentResult11 = {
  paymentType: PaymentType1.OneTimeReservation,
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
  amountsResp: {
    authorizedAmount: 133.28,
    currency: 'Currency0',
    totalRebatesAmount: 120.04,
    totalFeesAmount: 181.08,
    cashBackAmount: 206.58,
    tipAmount: 86.96,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  instalment: {
    instalmentType: InstalmentType.DeferredInstalments,
    sequenceNumber: 106,
    planId: 'PlanID4',
    period: 70,
    periodUnit: PeriodUnit1.Monthly,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  currencyConversion: [
    {
      convertedAmount: {
        amountValue: 81.82,
        currency: 'Currency0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      customerApprovedFlag: false,
      rate: 175.8,
      markup: 100.86,
      commission: 197.78,
      declaration: 'Declaration4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      convertedAmount: {
        amountValue: 81.82,
        currency: 'Currency0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      customerApprovedFlag: false,
      rate: 175.8,
      markup: 100.86,
      commission: 197.78,
      declaration: 'Declaration4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      convertedAmount: {
        amountValue: 81.82,
        currency: 'Currency0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      customerApprovedFlag: false,
      rate: 175.8,
      markup: 100.86,
      commission: 197.78,
      declaration: 'Declaration4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  merchantOverrideFlag: false,
  onlineFlag: true,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

