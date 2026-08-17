
# Stored Value Request 2

Content of the Stored Value Request message.

## Structure

`StoredValueRequest2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `saleData` | [`SaleData1`](../../doc/models/sale-data-1.md) | Required | Data related to the Sale System. |
| `storedValueData` | [`StoredValueData[]`](../../doc/models/stored-value-data.md) | Required | Data related to the stored value card. |

## Example

```ts
import {
  EntryModeEnum,
  IdentificationType11Enum,
  StoredValueAccountType1Enum,
  StoredValueRequest2,
  StoredValueTransactionType1Enum,
} from 'adyen';

const storedValueRequest2: StoredValueRequest2 = {
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
  storedValueData: [
    {
      storedValueTransactionType: StoredValueTransactionType1Enum.Reserve,
      storedValueProvider: 'StoredValueProvider2',
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
      productCode: 20,
      eanUpc: 194,
    }
  ],
};
```

