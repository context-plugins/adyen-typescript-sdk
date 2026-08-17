
# Sale to POI Response

The SaleToPOIResponse message pair is a container for the response message content. It contains a MessageHeader and a message body.

## Structure

`SaleToPOIResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageHeader` | [`MessageHeader`](../../doc/models/message-header.md) | Required | Message header of the Sale to POI protocol message.<br>It conveys Information related to the Sale to POI protocol management. |
| `balanceInquiryResponse` | [`BalanceInquiryResponse2 \| undefined`](../../doc/models/balance-inquiry-response-2.md) | Optional | Content of the Balance Inquiry Response message. |
| `cardAcquisitionResponse` | [`CardAcquisitionResponse2 \| undefined`](../../doc/models/card-acquisition-response-2.md) | Optional | Content of the Card Acquisition Response message. |
| `adminResponse` | [`AdminResponse2 \| undefined`](../../doc/models/admin-response-2.md) | Optional | Content of the Admin Response message. |
| `diagnosisResponse` | [`DiagnosisResponse2 \| undefined`](../../doc/models/diagnosis-response-2.md) | Optional | Content of the Diagnosis Response message. |
| `displayResponse` | [`DisplayResponse2 \| undefined`](../../doc/models/display-response-2.md) | Optional | Content of the Display Response message. |
| `enableServiceResponse` | [`EnableServiceResponse2 \| undefined`](../../doc/models/enable-service-response-2.md) | Optional | Content of the Enable Service Response message. |
| `getTotalsResponse` | [`GetTotalsResponse2 \| undefined`](../../doc/models/get-totals-response-2.md) | Optional | Content of the Get Totals Response message. |
| `inputResponse` | [`InputResponse2 \| undefined`](../../doc/models/input-response-2.md) | Optional | Content of the Input Response message. |
| `loginResponse` | [`LoginResponse2 \| undefined`](../../doc/models/login-response-2.md) | Optional | Content of the Login Response message. |
| `logoutResponse` | [`LogoutResponse2 \| undefined`](../../doc/models/logout-response-2.md) | Optional | Content of the Logout Response message. |
| `loyaltyResponse` | [`LoyaltyResponse2 \| undefined`](../../doc/models/loyalty-response-2.md) | Optional | Content of the Loyalty Response message. |
| `paymentResponse` | [`PaymentResponse21 \| undefined`](../../doc/models/payment-response-21.md) | Optional | Content of the Payment Response message. |
| `printResponse` | [`PrintResponse2 \| undefined`](../../doc/models/print-response-2.md) | Optional | Content of the Print Response message. |
| `cardReaderAPDUResponse` | [`CardReaderAPDUResponse2 \| undefined`](../../doc/models/card-reader-apdu-response-2.md) | Optional | Content of the Card Reader APDU Response message. |
| `reconciliationResponse` | [`ReconciliationResponse2 \| undefined`](../../doc/models/reconciliation-response-2.md) | Optional | Content of the Reconciliation Response message. |
| `reversalResponse` | [`ReversalResponse2 \| undefined`](../../doc/models/reversal-response-2.md) | Optional | Content of the Reversal Response message. |
| `storedValueResponse` | [`StoredValueResponse2 \| undefined`](../../doc/models/stored-value-response-2.md) | Optional | Content of the Stored Value Response message. |
| `transactionStatusResponse` | [`TransactionStatusResponse2 \| undefined`](../../doc/models/transaction-status-response-2.md) | Optional | Content of the TransactionStatus Response message. |

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
  SaleToPOIResponse,
  StoredValueAccountType1Enum,
  TrackFormat1Enum,
} from 'adyen';

const saleToPOIResponse: SaleToPOIResponse = {
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
};
```

