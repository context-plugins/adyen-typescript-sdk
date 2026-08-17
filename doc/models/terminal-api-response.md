
# Terminal API Response

The response payload of the Adyen Terminal API.

## Structure

`TerminalAPIResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `saleToPOIResponse` | [`SaleToPOIResponse`](../../doc/models/sale-to-poi-response.md) | Required | The SaleToPOIResponse message pair is a container for the response message content. It contains a MessageHeader and a message body. |

## Example

```ts
import {
  CharacterHeight1Enum,
  CharacterWidth1Enum,
  Device3Enum,
  DocumentQualifier1Enum,
  EntryModeEnum,
  ErrorCondition1Enum,
  GlobalStatus1Enum,
  IdentificationSupport1Enum,
  IdentificationType11Enum,
  InfoQualify3Enum,
  MessageCategory1Enum,
  MessageClass1Enum,
  MessageType1Enum,
  OutputFormat1Enum,
  PaymentInstrumentType11Enum,
  PrinterStatus1Enum,
  Result11Enum,
  StoredValueAccountType1Enum,
  TerminalAPIResponse,
  TrackFormat1Enum,
} from 'adyen';

const terminalAPIResponse: TerminalAPIResponse = {
  saleToPOIResponse: {
    messageHeader: {
      messageClass: MessageClass1Enum.Service,
      messageCategory: MessageCategory1Enum.StoredValue,
      messageType: MessageType1Enum.Notification,
      saleID: 'SaleID4',
      pOIID: 'POIID0',
      protocolVersion: 'ProtocolVersion2',
      serviceID: 'ServiceID2',
      deviceID: 'DeviceID4',
    },
    balanceInquiryResponse: {
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
        }
      ],
    },
    cardAcquisitionResponse: {
      response: {
        result: Result11Enum.Partial,
        errorCondition: ErrorCondition1Enum.PaymentRestriction,
        additionalResponse: 'AdditionalResponse8',
      },
      saleData: {
        saleTransactionID: {
          transactionID: 'TransactionID2',
          timeStamp: '2016-03-13T12:52:32.123Z',
        },
        operatorID: 'OperatorID8',
        operatorLanguage: 'OperatorLanguage2',
        shiftNumber: 'ShiftNumber0',
        saleReferenceID: 'SaleReferenceID8',
        saleTerminalData: {
          totalsGroupID: 'TotalsGroupID4',
        },
      },
      pOIData: {
        pOITransactionID: {
          transactionID: 'TransactionID2',
          timeStamp: '2016-03-13T12:52:32.123Z',
        },
        pOIReconciliationID: 52,
      },
      paymentBrand: [
        'PaymentBrand1',
        'PaymentBrand2',
        'PaymentBrand3'
      ],
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
      loyaltyAccount: [
        {
          loyaltyAccountID: {
            entryMode: [
              EntryModeEnum.File
            ],
            identificationType: IdentificationType11Enum.ISOTrack2,
            loyaltyID: 'LoyaltyID4',
            identificationSupport: IdentificationSupport1Enum.HybridCard,
          },
          loyaltyBrand: 'LoyaltyBrand0',
        }
      ],
    },
    adminResponse: {
      response: {
        result: Result11Enum.Partial,
        errorCondition: ErrorCondition1Enum.PaymentRestriction,
        additionalResponse: 'AdditionalResponse8',
      },
    },
    diagnosisResponse: {
      response: {
        result: Result11Enum.Partial,
        errorCondition: ErrorCondition1Enum.PaymentRestriction,
        additionalResponse: 'AdditionalResponse8',
      },
      pOIStatus: {
        globalStatus: GlobalStatus1Enum.Maintenance,
        securityOKFlag: false,
        pEDOKFlag: false,
        cardReaderOKFlag: false,
        printerStatus: PrinterStatus1Enum.PaperLow,
        communicationOKFlag: false,
      },
      hostStatus: [
        {
          acquirerID: 120,
          isReachableFlag: false,
        },
        {
          acquirerID: 120,
          isReachableFlag: false,
        }
      ],
    },
    displayResponse: {
      outputResult: [
        {
          device: Device3Enum.CashierInput,
          infoQualify: InfoQualify3Enum.Document,
          response: {
            result: Result11Enum.Partial,
            errorCondition: ErrorCondition1Enum.PaymentRestriction,
            additionalResponse: 'AdditionalResponse8',
          },
        },
        {
          device: Device3Enum.CashierInput,
          infoQualify: InfoQualify3Enum.Document,
          response: {
            result: Result11Enum.Partial,
            errorCondition: ErrorCondition1Enum.PaymentRestriction,
            additionalResponse: 'AdditionalResponse8',
          },
        },
        {
          device: Device3Enum.CashierInput,
          infoQualify: InfoQualify3Enum.Document,
          response: {
            result: Result11Enum.Partial,
            errorCondition: ErrorCondition1Enum.PaymentRestriction,
            additionalResponse: 'AdditionalResponse8',
          },
        }
      ],
    },
  },
};
```

