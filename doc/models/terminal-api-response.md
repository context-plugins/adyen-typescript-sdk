
# Terminal Api Response

The response payload of the Adyen Terminal API.

*This model accepts additional fields of type unknown.*

## Structure

`TerminalApiResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `saleToPoiResponse` | [`SaleToPoiResponse2`](../../doc/models/sale-to-poi-response-2.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CharacterHeight1,
  CharacterWidth1,
  Device3,
  DocumentQualifier1,
  EntryMode,
  ErrorCondition1,
  GlobalStatus1,
  IdentificationSupport1,
  IdentificationType11,
  InfoQualify3,
  MessageCategory1,
  MessageClass1,
  MessageType1,
  OutputFormat1,
  PaymentInstrumentType11,
  PrinterStatus1,
  Result11,
  StoredValueAccountType1,
  TerminalApiResponse,
  TrackFormat1,
} from 'adyenlib';

const terminalApiResponse: TerminalApiResponse = {
  saleToPoiResponse: {
    messageHeader: {
      messageClass: MessageClass1.Service,
      messageCategory: MessageCategory1.StoredValue,
      messageType: MessageType1.Notification,
      saleId: 'SaleID4',
      poiid: 'POIID0',
      protocolVersion: 'ProtocolVersion2',
      serviceId: 'ServiceID2',
      deviceId: 'DeviceID4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    balanceInquiryResponse: {
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
    adminResponse: {
      response: {
        result: Result11.Partial,
        errorCondition: ErrorCondition1.PaymentRestriction,
        additionalResponse: 'AdditionalResponse8',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    diagnosisResponse: {
      response: {
        result: Result11.Partial,
        errorCondition: ErrorCondition1.PaymentRestriction,
        additionalResponse: 'AdditionalResponse8',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      poiStatus: {
        globalStatus: GlobalStatus1.Maintenance,
        securityOkFlag: false,
        pedokFlag: false,
        cardReaderOkFlag: false,
        printerStatus: PrinterStatus1.PaperLow,
        communicationOkFlag: false,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      hostStatus: [
        {
          acquirerId: 120,
          isReachableFlag: false,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          acquirerId: 120,
          isReachableFlag: false,
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    displayResponse: {
      outputResult: [
        {
          device: Device3.CashierInput,
          infoQualify: InfoQualify3.Document,
          response: {
            result: Result11.Partial,
            errorCondition: ErrorCondition1.PaymentRestriction,
            additionalResponse: 'AdditionalResponse8',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          device: Device3.CashierInput,
          infoQualify: InfoQualify3.Document,
          response: {
            result: Result11.Partial,
            errorCondition: ErrorCondition1.PaymentRestriction,
            additionalResponse: 'AdditionalResponse8',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          device: Device3.CashierInput,
          infoQualify: InfoQualify3.Document,
          response: {
            result: Result11.Partial,
            errorCondition: ErrorCondition1.PaymentRestriction,
            additionalResponse: 'AdditionalResponse8',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
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
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

