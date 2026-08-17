
# Payment Response 4

It conveys Information related to the Payment transaction processed by the POI System.
Content of the Payment Response message.

## Structure

`PaymentResponse4`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |
| `saleData` | [`SaleData6`](../../doc/models/sale-data-6.md) | Required | Data related to the Sale System.<br>Copy. |
| `pOIData` | [`POIData1`](../../doc/models/poi-data-1.md) | Required | Data related to the POI System. |
| `paymentResult` | [`PaymentResult11 \| undefined`](../../doc/models/payment-result-11.md) | Optional | Data related to the result of a processed payment transaction.<br>If one data element is present. |
| `loyaltyResult` | [`LoyaltyResult[] \| undefined`](../../doc/models/loyalty-result.md) | Optional | Data related to the result of a processed loyalty transaction.<br>Loyalty cards used with the payment transaction. |
| `paymentReceipt` | [`PaymentReceipt[] \| undefined`](../../doc/models/payment-receipt.md) | Optional | Customer or Merchant payment receipt. If the payment receipts are printed by the Sale system and the POI or the Sale does not implement the Print exchange (Basic profile). |

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
  PaymentResponse4,
  PaymentType1Enum,
  PeriodUnit1Enum,
  Result11Enum,
  StoredValueAccountType1Enum,
  TrackFormat1Enum,
} from 'adyen';

const paymentResponse4: PaymentResponse4 = {
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
    }
  ],
};
```

