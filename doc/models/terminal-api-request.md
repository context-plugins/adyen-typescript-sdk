
# Terminal API Request

The request payload of the Adyen Terminal API.

## Structure

`TerminalAPIRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `saleToPOIRequest` | [`SaleToPOIRequest`](../../doc/models/sale-to-poi-request.md) | Required | The SaleToPOIRequest message pair is a container for the request message content. It contains a MessageHeader and a message body. |

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
  StoredValueAccountType1Enum,
  TerminalAPIRequest,
  TrackFormat1Enum,
} from 'adyen';

const terminalAPIRequest: TerminalAPIRequest = {
  saleToPOIRequest: {
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
  },
};
```

