
# Repeated Response Message Body

*This model accepts additional fields of type unknown.*

## Structure

`RepeatedResponseMessageBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loyaltyResponse` | [`LoyaltyResponse1 \| undefined`](../../doc/models/loyalty-response-1.md) | Optional | - |
| `paymentResponse` | [`PaymentResponse5 \| undefined`](../../doc/models/payment-response-5.md) | Optional | - |
| `reversalResponse` | [`ReversalResponse1 \| undefined`](../../doc/models/reversal-response-1.md) | Optional | - |
| `storedValueResponse` | [`StoredValueResponse1 \| undefined`](../../doc/models/stored-value-response-1.md) | Optional | - |
| `cardAcquisitionResponse` | [`CardAcquisitionResponse1 \| undefined`](../../doc/models/card-acquisition-response-1.md) | Optional | - |
| `cardReaderApduResponse` | [`CardReaderApduResponse1 \| undefined`](../../doc/models/card-reader-apdu-response-1.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CharacterHeight1,
  CharacterWidth1,
  DocumentQualifier1,
  EntryMode,
  ErrorCondition1,
  IdentificationSupport1,
  IdentificationType11,
  InstalmentType,
  OutputFormat1,
  PaymentInstrumentType11,
  PaymentType1,
  PeriodUnit1,
  RepeatedResponseMessageBody,
  Result11,
  StoredValueAccountType1,
  StoredValueTransactionType2,
  TrackFormat1,
} from 'adyen';

const repeatedResponseMessageBody: RepeatedResponseMessageBody = {
  loyaltyResponse: {
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
    loyaltyResult: [
      {
        loyaltyAccount: {
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
        currentBalance: 171.12,
        loyaltyAcquirerData: {
          loyaltyAcquirerId: 'LoyaltyAcquirerID4',
          approvalCode: 'ApprovalCode4',
          loyaltyTransactionId: {
            transactionId: 'TransactionID6',
            timeStamp: '2016-03-13T12:52:32.123Z',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          hostReconciliationId: 'HostReconciliationID4',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        loyaltyAccount: {
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
        currentBalance: 171.12,
        loyaltyAcquirerData: {
          loyaltyAcquirerId: 'LoyaltyAcquirerID4',
          approvalCode: 'ApprovalCode4',
          loyaltyTransactionId: {
            transactionId: 'TransactionID6',
            timeStamp: '2016-03-13T12:52:32.123Z',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          hostReconciliationId: 'HostReconciliationID4',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
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
  },
  paymentResponse: {
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
    paymentResult: {
      paymentType: PaymentType1.IssuerInstalment,
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
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    loyaltyResult: [
      {
        loyaltyAccount: {
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
        currentBalance: 171.12,
        loyaltyAcquirerData: {
          loyaltyAcquirerId: 'LoyaltyAcquirerID4',
          approvalCode: 'ApprovalCode4',
          loyaltyTransactionId: {
            transactionId: 'TransactionID6',
            timeStamp: '2016-03-13T12:52:32.123Z',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          hostReconciliationId: 'HostReconciliationID4',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        loyaltyAccount: {
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
        currentBalance: 171.12,
        loyaltyAcquirerData: {
          loyaltyAcquirerId: 'LoyaltyAcquirerID4',
          approvalCode: 'ApprovalCode4',
          loyaltyTransactionId: {
            transactionId: 'TransactionID6',
            timeStamp: '2016-03-13T12:52:32.123Z',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          hostReconciliationId: 'HostReconciliationID4',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        loyaltyAccount: {
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
        currentBalance: 171.12,
        loyaltyAcquirerData: {
          loyaltyAcquirerId: 'LoyaltyAcquirerID4',
          approvalCode: 'ApprovalCode4',
          loyaltyTransactionId: {
            transactionId: 'TransactionID6',
            timeStamp: '2016-03-13T12:52:32.123Z',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          hostReconciliationId: 'HostReconciliationID4',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
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
      }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  reversalResponse: {
    response: {
      result: Result11.Partial,
      errorCondition: ErrorCondition1.PaymentRestriction,
      additionalResponse: 'AdditionalResponse8',
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
    originalPoiTransaction: {
      saleId: 'SaleID6',
      poiid: 'POIID0',
      poiTransactionId: {
        transactionId: 'TransactionID2',
        timeStamp: '2016-03-13T12:52:32.123Z',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      reuseCardDataFlag: false,
      approvalCode: 'ApprovalCode0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    reversedAmount: 90.36,
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
      }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  storedValueResponse: {
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
    storedValueResult: [
      {
        storedValueTransactionType: StoredValueTransactionType2.Reverse,
        productCode: 20,
        eanUpc: 136,
        itemAmount: 5.58,
        currency: 'Currency2',
        storedValueAccountStatus: {
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
          currentBalance: 45.56,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        storedValueTransactionType: StoredValueTransactionType2.Reverse,
        productCode: 20,
        eanUpc: 136,
        itemAmount: 5.58,
        currency: 'Currency2',
        storedValueAccountStatus: {
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
          currentBalance: 45.56,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      {
        storedValueTransactionType: StoredValueTransactionType2.Reverse,
        productCode: 20,
        eanUpc: 136,
        itemAmount: 5.58,
        currency: 'Currency2',
        storedValueAccountStatus: {
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
          currentBalance: 45.56,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      }
    ],
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
      }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  cardAcquisitionResponse: {
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
      'PaymentBrand1',
      'PaymentBrand2',
      'PaymentBrand3'
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
      }
    ],
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

