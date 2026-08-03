
# Sale to Poi Request 2

*This model accepts additional fields of type unknown.*

## Structure

`SaleToPoiRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageHeader` | [`MessageHeader1`](../../doc/models/message-header-1.md) | Required | - |
| `abortRequest` | [`AbortRequest3 \| undefined`](../../doc/models/abort-request-3.md) | Optional | - |
| `balanceInquiryRequest` | [`BalanceInquiryRequest3 \| undefined`](../../doc/models/balance-inquiry-request-3.md) | Optional | - |
| `cardAcquisitionRequest` | [`CardAcquisitionRequest3 \| undefined`](../../doc/models/card-acquisition-request-3.md) | Optional | - |
| `adminRequest` | [`AdminRequest3 \| undefined`](../../doc/models/admin-request-3.md) | Optional | - |
| `diagnosisRequest` | [`DiagnosisRequest3 \| undefined`](../../doc/models/diagnosis-request-3.md) | Optional | - |
| `displayRequest` | [`DisplayRequest3 \| undefined`](../../doc/models/display-request-3.md) | Optional | - |
| `enableServiceRequest` | [`EnableServiceRequest3 \| undefined`](../../doc/models/enable-service-request-3.md) | Optional | - |
| `eventNotification` | [`EventNotification3 \| undefined`](../../doc/models/event-notification-3.md) | Optional | - |
| `getTotalsRequest` | [`GetTotalsRequest3 \| undefined`](../../doc/models/get-totals-request-3.md) | Optional | - |
| `inputRequest` | [`InputRequest3 \| undefined`](../../doc/models/input-request-3.md) | Optional | - |
| `inputUpdate` | [`InputUpdate3 \| undefined`](../../doc/models/input-update-3.md) | Optional | - |
| `loginRequest` | [`LoginRequest3 \| undefined`](../../doc/models/login-request-3.md) | Optional | - |
| `logoutRequest` | [`LogoutRequest3 \| undefined`](../../doc/models/logout-request-3.md) | Optional | - |
| `paymentRequest` | [`PaymentRequest22 \| undefined`](../../doc/models/payment-request-22.md) | Optional | - |
| `printRequest` | [`PrintRequest3 \| undefined`](../../doc/models/print-request-3.md) | Optional | - |
| `cardReaderApduRequest` | [`CardReaderApduRequest3 \| undefined`](../../doc/models/card-reader-apdu-request-3.md) | Optional | - |
| `reconciliationRequest` | [`ReconciliationRequest3 \| undefined`](../../doc/models/reconciliation-request-3.md) | Optional | - |
| `reversalRequest` | [`ReversalRequest3 \| undefined`](../../doc/models/reversal-request-3.md) | Optional | - |
| `storedValueRequest` | [`StoredValueRequest3 \| undefined`](../../doc/models/stored-value-request-3.md) | Optional | - |
| `transactionStatusRequest` | [`TransactionStatusRequest3 \| undefined`](../../doc/models/transaction-status-request-3.md) | Optional | - |
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
  SaleToPoiRequest2,
  StoredValueAccountType1,
  TrackFormat1,
} from 'adyenlib';

const saleToPoiRequest2: SaleToPoiRequest2 = {
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
};
```

