
# Stored Value Response 2

Content of the Stored Value Response message.

## Structure

`StoredValueResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response11`](../../doc/models/response-11.md) | Required | Result of a message request processing. |
| `saleData` | [`SaleData1`](../../doc/models/sale-data-1.md) | Required | Data related to the Sale System. |
| `pOIData` | [`POIData1`](../../doc/models/poi-data-1.md) | Required | Data related to the POI System. |
| `storedValueResult` | [`StoredValueResult[] \| undefined`](../../doc/models/stored-value-result.md) | Optional | Result of loading/reloading a stored value card.<br>If StoredValueResponse.Result is Success or Partial, one entry per StoredValueRequest.StoredValueData loaded or activated. |
| `paymentReceipt` | [`PaymentReceipt[] \| undefined`](../../doc/models/payment-receipt.md) | Optional | - |

## Example

```ts
import {
  CharacterHeight1Enum,
  CharacterWidth1Enum,
  DocumentQualifier1Enum,
  EntryModeEnum,
  ErrorCondition1Enum,
  IdentificationType11Enum,
  OutputFormat1Enum,
  Result11Enum,
  StoredValueAccountType1Enum,
  StoredValueResponse2,
  StoredValueTransactionType2Enum,
} from 'adyen';

const storedValueResponse2: StoredValueResponse2 = {
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

