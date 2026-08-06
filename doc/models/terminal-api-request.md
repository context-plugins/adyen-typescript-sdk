
# Terminal Api Request

The request payload of the Adyen Terminal API.

*This model accepts additional fields of type unknown.*

## Structure

`TerminalApiRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `saleToPoiRequest` | [`SaleToPoiRequest2`](../../doc/models/sale-to-poi-request-2.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AccountType13,
  CharacterHeight1,
  CharacterWidth1,
  Device11,
  EntryMode,
  ForceEntryMode,
  IdentificationSupport1,
  IdentificationType11,
  InfoQualify1,
  LoyaltyHandling2,
  MenuEntryTag1,
  MessageCategory1,
  MessageCategory2,
  MessageClass1,
  MessageType1,
  OutputFormat1,
  OutputFormat2,
  PaymentInstrumentType11,
  StoredValueAccountType1,
  TerminalApiRequest,
  TrackFormat1,
} from 'adyen';

const terminalApiRequest: TerminalApiRequest = {
  saleToPoiRequest: {
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
    abortRequest: {
      messageReference: {
        messageCategory: MessageCategory2.Payment,
        serviceId: 'ServiceID0',
        deviceId: 'DeviceID2',
        saleId: 'SaleID8',
        poiid: 'POIID2',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      abortReason: 'AbortReason6',
      displayOutput: {
        device: Device11.CashierDisplay,
        infoQualify: InfoQualify1.Status,
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
        responseRequiredFlag: false,
        minimumDisplayTime: 110,
        menuEntry: [
          {
            outputFormat: OutputFormat2.Xhtml,
            menuEntryTag: MenuEntryTag1.SubMenu,
            defaultSelectedFlag: false,
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
              },
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
            outputXhtml: 'OutputXHTML8',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          {
            outputFormat: OutputFormat2.Xhtml,
            menuEntryTag: MenuEntryTag1.SubMenu,
            defaultSelectedFlag: false,
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
              },
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
            outputXhtml: 'OutputXHTML8',
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        ],
        outputSignature: 'OutputSignature4',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    balanceInquiryRequest: {
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
    },
    cardAcquisitionRequest: {
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
      cardAcquisitionTransaction: {
        allowedPaymentBrand: [
          'AllowedPaymentBrand6',
          'AllowedPaymentBrand7'
        ],
        allowedLoyaltyBrand: [
          'AllowedLoyaltyBrand4'
        ],
        loyaltyHandling: LoyaltyHandling2.Processed,
        customerLanguage: 'CustomerLanguage8',
        forceEntryMode: [
          ForceEntryMode.Icc
        ],
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    adminRequest: {
      serviceIdentification: 'ServiceIdentification0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    diagnosisRequest: {
      poiid: 'POIID2',
      hostDiagnosisFlag: false,
      acquirerId: [
        48,
        49,
        50
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

