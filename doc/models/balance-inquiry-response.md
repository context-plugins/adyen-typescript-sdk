
# Balance Inquiry Response

Content of the Balance Inquiry Response message.
It conveys the balance and the identification of the associated payment, loyalty or stored value account.

## Structure

`BalanceInquiryResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |
| `paymentAccountStatus` | [`PaymentAccountStatus2 \| undefined`](../../doc/models/payment-account-status-2.md) | Optional | Data related to the result of a Balance Inquiry request.<br>If BalanceInquiryRequest. PaymentAccount present. |
| `paymentReceipt` | [`PaymentReceipt[] \| undefined`](../../doc/models/payment-receipt.md) | Optional | - |

## Example

```ts
import {
  BalanceInquiryResponse,
  CharacterHeight1Enum,
  CharacterWidth1Enum,
  DocumentQualifier1Enum,
  EntryModeEnum,
  ErrorCondition1Enum,
  IdentificationType11Enum,
  OutputFormat1Enum,
  PaymentInstrumentType11Enum,
  Result11Enum,
  StoredValueAccountType1Enum,
  TrackFormat1Enum,
} from 'adyen';

const balanceInquiryResponse: BalanceInquiryResponse = {
  response: {
    result: Result11Enum.Partial,
    errorCondition: ErrorCondition1Enum.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
  },
  paymentAccountStatus: {
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
    currentBalance: 83.4,
    currency: 'Currency4',
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
  },
  paymentReceipt: [
    {
      documentQualifier: DocumentQualifier1Enum.CustomerReceipt,
      outputContent: {
        outputFormat: OutputFormat1Enum.XHTML,
        predefinedContent: {
          referenceID: 'ReferenceID0',
          language: 'Language2',
        },
        outputText: [
          {
            text: 'Text6',
            characterSet: 194,
            startRow: 74,
            startColumn: 220,
            characterWidth: CharacterWidth1Enum.SingleWidth,
            characterHeight: CharacterHeight1Enum.SingleHeight,
          }
        ],
        outputXHTML: 'OutputXHTML2',
        outputBarcode: {
          barcodeValue: 'BarcodeValue2',
        },
      },
      integratedPrintFlag: false,
      requiredSignatureFlag: false,
    },
    {
      documentQualifier: DocumentQualifier1Enum.CustomerReceipt,
      outputContent: {
        outputFormat: OutputFormat1Enum.XHTML,
        predefinedContent: {
          referenceID: 'ReferenceID0',
          language: 'Language2',
        },
        outputText: [
          {
            text: 'Text6',
            characterSet: 194,
            startRow: 74,
            startColumn: 220,
            characterWidth: CharacterWidth1Enum.SingleWidth,
            characterHeight: CharacterHeight1Enum.SingleHeight,
          }
        ],
        outputXHTML: 'OutputXHTML2',
        outputBarcode: {
          barcodeValue: 'BarcodeValue2',
        },
      },
      integratedPrintFlag: false,
      requiredSignatureFlag: false,
    },
    {
      documentQualifier: DocumentQualifier1Enum.CustomerReceipt,
      outputContent: {
        outputFormat: OutputFormat1Enum.XHTML,
        predefinedContent: {
          referenceID: 'ReferenceID0',
          language: 'Language2',
        },
        outputText: [
          {
            text: 'Text6',
            characterSet: 194,
            startRow: 74,
            startColumn: 220,
            characterWidth: CharacterWidth1Enum.SingleWidth,
            characterHeight: CharacterHeight1Enum.SingleHeight,
          }
        ],
        outputXHTML: 'OutputXHTML2',
        outputBarcode: {
          barcodeValue: 'BarcodeValue2',
        },
      },
      integratedPrintFlag: false,
      requiredSignatureFlag: false,
    }
  ],
};
```

