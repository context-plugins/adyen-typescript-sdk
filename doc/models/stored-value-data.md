
# Stored Value Data

It contains: - the identification of the stored value accounts or the stored value cards, if provided by the Sale System, and - the associated products sold by the Sale System.
Data related to the stored value card.

## Structure

`StoredValueData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `storedValueProvider` | `string \| undefined` | Optional | Identification of the provider of the stored value account load/reload.<br>If more than one provider to manage on the POI, and StoredValueAccountID absent.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `storedValueTransactionType` | [`StoredValueTransactionType1Enum`](../../doc/models/stored-value-transaction-type-1-enum.md) | Required | Identification of operation to proceed on the stored value account or the stored value card.<br>Possible values:<br><br>* **Activate**<br>* **Duplicate**<br>* **Load**<br>* **Reserve**<br>* **Reverse**<br>* **Unload** |
| `storedValueAccountID` | [`StoredValueAccountID1 \| undefined`](../../doc/models/stored-value-account-id-1.md) | Optional | Identification of the stored value account or the stored value card.<br>If the identification of the Stored Value account or card has been made by the Sale System before the request. |
| `originalPOITransaction` | [`OriginalPOITransaction1 \| undefined`](../../doc/models/original-poi-transaction-1.md) | Optional | Identification of a previous POI transaction.<br>If StoredValueTransactionType is Reverse or Duplicate. |
| `productCode` | `number \| undefined` | Optional | Product code of item purchased with the transaction.<br><br>**Constraints**: `>= 1`, `<= 20` |
| `eanUpc` | `number \| undefined` | Optional | Standard product code of item purchased with the transaction. |
| `itemAmount` | `number \| undefined` | Optional | Total amount of the item line.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `currency` | `string \| undefined` | Optional | Currency of a monetary amount.<br><br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |

## Example

```ts
import {
  EntryModeEnum,
  IdentificationType11Enum,
  StoredValueAccountType1Enum,
  StoredValueData,
  StoredValueTransactionType1Enum,
} from 'adyen';

const storedValueData: StoredValueData = {
  storedValueTransactionType: StoredValueTransactionType1Enum.Reserve,
  storedValueProvider: 'StoredValueProvider8',
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
  eanUpc: 18,
};
```

