
# Sale to POI Request

The SaleToPOIRequest message pair is a container for the request message content. It contains a MessageHeader and a message body.

## Structure

`SaleToPOIRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageHeader` | [`MessageHeader`](../../doc/models/message-header.md) | Required | Message header of the Sale to POI protocol message.<br>It conveys Information related to the Sale to POI protocol management. |
| `abortRequest` | [`AbortRequest2 \| undefined`](../../doc/models/abort-request-2.md) | Optional | Content of the Abort Request message. |
| `balanceInquiryRequest` | [`BalanceInquiryRequest2 \| undefined`](../../doc/models/balance-inquiry-request-2.md) | Optional | Content of the Balance Inquiry Request message. |
| `cardAcquisitionRequest` | [`CardAcquisitionRequest2 \| undefined`](../../doc/models/card-acquisition-request-2.md) | Optional | Content of the Card Acquisition Request message. |
| `adminRequest` | [`AdminRequest2 \| undefined`](../../doc/models/admin-request-2.md) | Optional | Content of the Admin Request message. |
| `diagnosisRequest` | [`DiagnosisRequest2 \| undefined`](../../doc/models/diagnosis-request-2.md) | Optional | Content of the Diagnosis Request message. |
| `displayRequest` | [`DisplayRequest2 \| undefined`](../../doc/models/display-request-2.md) | Optional | Content of the Display Request message. |
| `enableServiceRequest` | [`EnableServiceRequest2 \| undefined`](../../doc/models/enable-service-request-2.md) | Optional | Content of the Enable Service Request message. |
| `eventNotification` | [`EventNotification2 \| undefined`](../../doc/models/event-notification-2.md) | Optional | Content of the EventNotification message. |
| `getTotalsRequest` | [`GetTotalsRequest2 \| undefined`](../../doc/models/get-totals-request-2.md) | Optional | Content of the Get Totals Request message. |
| `inputRequest` | [`InputRequest2 \| undefined`](../../doc/models/input-request-2.md) | Optional | Content of the Input Request message. |
| `inputUpdate` | [`InputUpdate2 \| undefined`](../../doc/models/input-update-2.md) | Optional | Content of the Input Update message. |
| `loginRequest` | [`LoginRequest2 \| undefined`](../../doc/models/login-request-2.md) | Optional | Content of the Login Request message. |
| `logoutRequest` | [`LogoutRequest2 \| undefined`](../../doc/models/logout-request-2.md) | Optional | Content of the Logout Request message. |
| `paymentRequest` | [`PaymentRequest21 \| undefined`](../../doc/models/payment-request-21.md) | Optional | Content of the Payment Request message. |
| `printRequest` | [`PrintRequest2 \| undefined`](../../doc/models/print-request-2.md) | Optional | Content of the Print Request message. |
| `cardReaderAPDURequest` | [`CardReaderAPDURequest2 \| undefined`](../../doc/models/card-reader-apdu-request-2.md) | Optional | Content of the Card Reader APDU Request message. |
| `reconciliationRequest` | [`ReconciliationRequest2 \| undefined`](../../doc/models/reconciliation-request-2.md) | Optional | Content of the Reconciliation Request message. |
| `reversalRequest` | [`ReversalRequest2 \| undefined`](../../doc/models/reversal-request-2.md) | Optional | Content of the Reversal Request message. |
| `storedValueRequest` | [`StoredValueRequest2 \| undefined`](../../doc/models/stored-value-request-2.md) | Optional | Content of the Stored Value Request message. |
| `transactionStatusRequest` | [`TransactionStatusRequest2 \| undefined`](../../doc/models/transaction-status-request-2.md) | Optional | Content of the TransactionStatus Request message. |

## Example

```ts
import {
  AccountType12Enum,
  CharacterHeight1Enum,
  CharacterWidth1Enum,
  Device11Enum,
  EntryModeEnum,
  ForceEntryModeEnum,
  IdentificationSupport1Enum,
  IdentificationType11Enum,
  InfoQualify1Enum,
  LoyaltyHandling2Enum,
  MenuEntryTag1Enum,
  MessageCategory1Enum,
  MessageCategory2Enum,
  MessageClass1Enum,
  MessageType1Enum,
  OutputFormat1Enum,
  OutputFormat2Enum,
  PaymentInstrumentType11Enum,
  SaleToPOIRequest,
  StoredValueAccountType1Enum,
  TrackFormat1Enum,
} from 'adyen';

const saleToPOIRequest: SaleToPOIRequest = {
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
  abortRequest: {
    messageReference: {
      messageCategory: MessageCategory2Enum.Payment,
      serviceID: 'ServiceID0',
      deviceID: 'DeviceID2',
      saleID: 'SaleID8',
      pOIID: 'POIID2',
    },
    abortReason: 'AbortReason6',
    displayOutput: {
      device: Device11Enum.CashierDisplay,
      infoQualify: InfoQualify1Enum.Status,
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
      responseRequiredFlag: false,
      minimumDisplayTime: 110,
      menuEntry: [
        {
          outputFormat: OutputFormat2Enum.XHTML,
          menuEntryTag: MenuEntryTag1Enum.SubMenu,
          defaultSelectedFlag: false,
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
            },
            {
              text: 'Text6',
              characterSet: 194,
              startRow: 74,
              startColumn: 220,
              characterWidth: CharacterWidth1Enum.SingleWidth,
              characterHeight: CharacterHeight1Enum.SingleHeight,
            }
          ],
          outputXHTML: 'OutputXHTML8',
        },
        {
          outputFormat: OutputFormat2Enum.XHTML,
          menuEntryTag: MenuEntryTag1Enum.SubMenu,
          defaultSelectedFlag: false,
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
            },
            {
              text: 'Text6',
              characterSet: 194,
              startRow: 74,
              startColumn: 220,
              characterWidth: CharacterWidth1Enum.SingleWidth,
              characterHeight: CharacterHeight1Enum.SingleHeight,
            }
          ],
          outputXHTML: 'OutputXHTML8',
        }
      ],
      outputSignature: 'OutputSignature4',
    },
  },
  balanceInquiryRequest: {
    paymentAccountReq: {
      accountType: AccountType12Enum.Checking,
      cardAcquisitionReference: {
        transactionID: 'TransactionID8',
        timeStamp: '2016-03-13T12:52:32.123Z',
      },
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
    },
    loyaltyAccountReq: {
      cardAcquisitionReference: {
        transactionID: 'TransactionID8',
        timeStamp: '2016-03-13T12:52:32.123Z',
      },
      loyaltyAccountID: {
        entryMode: [
          EntryModeEnum.File
        ],
        identificationType: IdentificationType11Enum.ISOTrack2,
        loyaltyID: 'LoyaltyID4',
        identificationSupport: IdentificationSupport1Enum.HybridCard,
      },
    },
  },
  cardAcquisitionRequest: {
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
    cardAcquisitionTransaction: {
      allowedPaymentBrand: [
        'AllowedPaymentBrand6',
        'AllowedPaymentBrand7'
      ],
      allowedLoyaltyBrand: [
        'AllowedLoyaltyBrand4'
      ],
      loyaltyHandling: LoyaltyHandling2Enum.Processed,
      customerLanguage: 'CustomerLanguage8',
      forceEntryMode: [
        ForceEntryModeEnum.ICC
      ],
    },
  },
  adminRequest: {
    serviceIdentification: 'ServiceIdentification0',
  },
  diagnosisRequest: {
    pOIID: 'POIID2',
    hostDiagnosisFlag: false,
    acquirerID: [
      48,
      49,
      50
    ],
  },
};
```

