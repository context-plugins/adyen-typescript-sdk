
# Balanceinquiry Response 1

*This model accepts additional fields of type unknown.*

## Structure

`BalanceinquiryResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response3`](../../doc/models/response-3.md) | Required | - |
| `paymentAccountStatus` | [`PaymentAccountStatus \| undefined`](../../doc/models/payment-account-status.md) | Optional | - |
| `paymentReceipt` | [`PaymentReceipt[] \| undefined`](../../doc/models/payment-receipt.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  BalanceinquiryResponse1,
  CharacterHeight1,
  CharacterWidth1,
  DocumentQualifier1,
  EntryMode,
  ErrorCondition1,
  IdentificationType11,
  OutputFormat1,
  PaymentInstrumentType11,
  Result11,
  StoredValueAccountType1,
  TrackFormat1,
} from 'adyen';

const balanceinquiryResponse1: BalanceinquiryResponse1 = {
  response: {
    result: Result11.Partial,
    errorCondition: ErrorCondition1.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  paymentAccountStatus: {
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
    currentBalance: 83.4,
    currency: 'Currency4',
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
  },
  paymentReceipt: [
    {
      documentQualifier: DocumentQualifier1.CustomerReceipt,
      outputContent: {
        outputFormat: OutputFormat1.Xhtml,
        predefinedContent: {
          referenceId: 'ReferenceID0',
          language: 'Language2',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        outputText: [
          {
            text: 'Text6',
            characterSet: 194,
            startRow: 74,
            startColumn: 220,
            characterWidth: CharacterWidth1.SingleWidth,
            characterHeight: CharacterHeight1.SingleHeight,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        ],
        outputXhtml: 'OutputXHTML2',
        outputBarcode: {
          barcodeValue: 'BarcodeValue2',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      integratedPrintFlag: false,
      requiredSignatureFlag: false,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      documentQualifier: DocumentQualifier1.CustomerReceipt,
      outputContent: {
        outputFormat: OutputFormat1.Xhtml,
        predefinedContent: {
          referenceId: 'ReferenceID0',
          language: 'Language2',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        outputText: [
          {
            text: 'Text6',
            characterSet: 194,
            startRow: 74,
            startColumn: 220,
            characterWidth: CharacterWidth1.SingleWidth,
            characterHeight: CharacterHeight1.SingleHeight,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        ],
        outputXhtml: 'OutputXHTML2',
        outputBarcode: {
          barcodeValue: 'BarcodeValue2',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      integratedPrintFlag: false,
      requiredSignatureFlag: false,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      documentQualifier: DocumentQualifier1.CustomerReceipt,
      outputContent: {
        outputFormat: OutputFormat1.Xhtml,
        predefinedContent: {
          referenceId: 'ReferenceID0',
          language: 'Language2',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        outputText: [
          {
            text: 'Text6',
            characterSet: 194,
            startRow: 74,
            startColumn: 220,
            characterWidth: CharacterWidth1.SingleWidth,
            characterHeight: CharacterHeight1.SingleHeight,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        ],
        outputXhtml: 'OutputXHTML2',
        outputBarcode: {
          barcodeValue: 'BarcodeValue2',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      integratedPrintFlag: false,
      requiredSignatureFlag: false,
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

