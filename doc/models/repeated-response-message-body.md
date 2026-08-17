
# Repeated Response Message Body

## Structure

`RepeatedResponseMessageBody`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loyaltyResponse` | [`LoyaltyResponse \| undefined`](../../doc/models/loyalty-response.md) | Optional | It conveys Information related to the Loyalty transaction processed by the POI System.<br>Content of the Loyalty Response message. |
| `paymentResponse` | [`PaymentResponse4 \| undefined`](../../doc/models/payment-response-4.md) | Optional | It conveys Information related to the Payment transaction processed by the POI System.<br>Content of the Payment Response message. |
| `reversalResponse` | [`ReversalResponse \| undefined`](../../doc/models/reversal-response.md) | Optional | It conveys Information related to the reversal processed by the POI System.<br>Content of the Reversal Response message. |
| `storedValueResponse` | [`StoredValueResponse \| undefined`](../../doc/models/stored-value-response.md) | Optional | It conveys Information related to the Stored Value transaction processed by the POI System.<br>Content of the Stored Value Response message. |
| `cardAcquisitionResponse` | [`CardAcquisitionResponse \| undefined`](../../doc/models/card-acquisition-response.md) | Optional | It conveys Information related to the payment and loyalty cards read and processed by the POI System and entered by the Customer.<br>Content of the Card Acquisition Response message. |
| `cardReaderAPDUResponse` | [`CardReaderAPDUResponse \| undefined`](../../doc/models/card-reader-apdu-response.md) | Optional | Content of the Card Reader APDU Response message.<br>It contains the result of the requested service, APDU response sent by the chip of the card in response to the APDU request. |

## Example

```ts
import {
  CharacterHeight1Enum,
  CharacterWidth1Enum,
  DocumentQualifier1Enum,
  EntryModeEnum,
  ErrorCondition1Enum,
  IdentificationSupport1Enum,
  IdentificationType11Enum,
  InstalmentTypeEnum,
  OutputFormat1Enum,
  PaymentInstrumentType11Enum,
  PaymentType1Enum,
  PeriodUnit1Enum,
  RepeatedResponseMessageBody,
  Result11Enum,
  StoredValueAccountType1Enum,
  StoredValueTransactionType2Enum,
  TrackFormat1Enum,
} from 'adyen';

const repeatedResponseMessageBody: RepeatedResponseMessageBody = {
  loyaltyResponse: {
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
    loyaltyResult: [
      {
        loyaltyAccount: {
          loyaltyAccountID: {
            entryMode: [
              EntryModeEnum.File
            ],
            identificationType: IdentificationType11Enum.ISOTrack2,
            loyaltyID: 'LoyaltyID4',
            identificationSupport: IdentificationSupport1Enum.HybridCard,
          },
          loyaltyBrand: 'LoyaltyBrand0',
        },
        currentBalance: 171.12,
        loyaltyAcquirerData: {
          loyaltyAcquirerID: 'LoyaltyAcquirerID4',
          approvalCode: 'ApprovalCode4',
          loyaltyTransactionID: {
            transactionID: 'TransactionID6',
            timeStamp: '2016-03-13T12:52:32.123Z',
          },
          hostReconciliationID: 'HostReconciliationID4',
        },
      },
      {
        loyaltyAccount: {
          loyaltyAccountID: {
            entryMode: [
              EntryModeEnum.File
            ],
            identificationType: IdentificationType11Enum.ISOTrack2,
            loyaltyID: 'LoyaltyID4',
            identificationSupport: IdentificationSupport1Enum.HybridCard,
          },
          loyaltyBrand: 'LoyaltyBrand0',
        },
        currentBalance: 171.12,
        loyaltyAcquirerData: {
          loyaltyAcquirerID: 'LoyaltyAcquirerID4',
          approvalCode: 'ApprovalCode4',
          loyaltyTransactionID: {
            transactionID: 'TransactionID6',
            timeStamp: '2016-03-13T12:52:32.123Z',
          },
          hostReconciliationID: 'HostReconciliationID4',
        },
      }
    ],
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
  },
  paymentResponse: {
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
    paymentResult: {
      paymentType: PaymentType1Enum.IssuerInstalment,
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
      amountsResp: {
        authorizedAmount: 133.28,
        currency: 'Currency0',
        totalRebatesAmount: 120.04,
        totalFeesAmount: 181.08,
        cashBackAmount: 206.58,
        tipAmount: 86.96,
      },
      instalment: {
        instalmentType: InstalmentTypeEnum.DeferredInstalments,
        sequenceNumber: 106,
        planID: 'PlanID4',
        period: 70,
        periodUnit: PeriodUnit1Enum.Monthly,
      },
      currencyConversion: [
        {
          convertedAmount: {
            amountValue: 81.82,
            currency: 'Currency0',
          },
          customerApprovedFlag: false,
          rate: 175.8,
          markup: 100.86,
          commission: 197.78,
          declaration: 'Declaration4',
        },
        {
          convertedAmount: {
            amountValue: 81.82,
            currency: 'Currency0',
          },
          customerApprovedFlag: false,
          rate: 175.8,
          markup: 100.86,
          commission: 197.78,
          declaration: 'Declaration4',
        }
      ],
    },
    loyaltyResult: [
      {
        loyaltyAccount: {
          loyaltyAccountID: {
            entryMode: [
              EntryModeEnum.File
            ],
            identificationType: IdentificationType11Enum.ISOTrack2,
            loyaltyID: 'LoyaltyID4',
            identificationSupport: IdentificationSupport1Enum.HybridCard,
          },
          loyaltyBrand: 'LoyaltyBrand0',
        },
        currentBalance: 171.12,
        loyaltyAcquirerData: {
          loyaltyAcquirerID: 'LoyaltyAcquirerID4',
          approvalCode: 'ApprovalCode4',
          loyaltyTransactionID: {
            transactionID: 'TransactionID6',
            timeStamp: '2016-03-13T12:52:32.123Z',
          },
          hostReconciliationID: 'HostReconciliationID4',
        },
      },
      {
        loyaltyAccount: {
          loyaltyAccountID: {
            entryMode: [
              EntryModeEnum.File
            ],
            identificationType: IdentificationType11Enum.ISOTrack2,
            loyaltyID: 'LoyaltyID4',
            identificationSupport: IdentificationSupport1Enum.HybridCard,
          },
          loyaltyBrand: 'LoyaltyBrand0',
        },
        currentBalance: 171.12,
        loyaltyAcquirerData: {
          loyaltyAcquirerID: 'LoyaltyAcquirerID4',
          approvalCode: 'ApprovalCode4',
          loyaltyTransactionID: {
            transactionID: 'TransactionID6',
            timeStamp: '2016-03-13T12:52:32.123Z',
          },
          hostReconciliationID: 'HostReconciliationID4',
        },
      },
      {
        loyaltyAccount: {
          loyaltyAccountID: {
            entryMode: [
              EntryModeEnum.File
            ],
            identificationType: IdentificationType11Enum.ISOTrack2,
            loyaltyID: 'LoyaltyID4',
            identificationSupport: IdentificationSupport1Enum.HybridCard,
          },
          loyaltyBrand: 'LoyaltyBrand0',
        },
        currentBalance: 171.12,
        loyaltyAcquirerData: {
          loyaltyAcquirerID: 'LoyaltyAcquirerID4',
          approvalCode: 'ApprovalCode4',
          loyaltyTransactionID: {
            transactionID: 'TransactionID6',
            timeStamp: '2016-03-13T12:52:32.123Z',
          },
          hostReconciliationID: 'HostReconciliationID4',
        },
      }
    ],
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
  reversalResponse: {
    response: {
      result: Result11Enum.Partial,
      errorCondition: ErrorCondition1Enum.PaymentRestriction,
      additionalResponse: 'AdditionalResponse8',
    },
    pOIData: {
      pOITransactionID: {
        transactionID: 'TransactionID2',
        timeStamp: '2016-03-13T12:52:32.123Z',
      },
      pOIReconciliationID: 52,
    },
    originalPOITransaction: {
      saleID: 'SaleID6',
      pOIID: 'POIID0',
      pOITransactionID: {
        transactionID: 'TransactionID2',
        timeStamp: '2016-03-13T12:52:32.123Z',
      },
      reuseCardDataFlag: false,
      approvalCode: 'ApprovalCode0',
    },
    reversedAmount: 90.36,
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
      }
    ],
  },
  storedValueResponse: {
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
    storedValueResult: [
      {
        storedValueTransactionType: StoredValueTransactionType2Enum.Reverse,
        productCode: 20,
        eanUpc: 136,
        itemAmount: 5.58,
        currency: 'Currency2',
        storedValueAccountStatus: {
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
          currentBalance: 45.56,
        },
      },
      {
        storedValueTransactionType: StoredValueTransactionType2Enum.Reverse,
        productCode: 20,
        eanUpc: 136,
        itemAmount: 5.58,
        currency: 'Currency2',
        storedValueAccountStatus: {
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
          currentBalance: 45.56,
        },
      },
      {
        storedValueTransactionType: StoredValueTransactionType2Enum.Reverse,
        productCode: 20,
        eanUpc: 136,
        itemAmount: 5.58,
        currency: 'Currency2',
        storedValueAccountStatus: {
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
          currentBalance: 45.56,
        },
      }
    ],
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
};
```

