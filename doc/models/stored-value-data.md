
# Stored Value Data

It contains: - the identification of the stored value accounts or the stored value cards, if provided by the Sale System, and - the associated products sold by the Sale System.
Data related to the stored value card.

*This model accepts additional fields of type unknown.*

## Structure

`StoredValueData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `storedValueProvider` | `string \| undefined` | Optional | Identification of the provider of the stored value account load/reload.<br>If more than one provider to manage on the POI, and StoredValueAccountID absent.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `storedValueTransactionType` | [`StoredValueTransactionType1`](../../doc/models/stored-value-transaction-type-1.md) | Required | - |
| `storedValueAccountId` | [`StoredValueAccountId2 \| undefined`](../../doc/models/stored-value-account-id-2.md) | Optional | - |
| `originalPoiTransaction` | [`OriginalPoiTransaction3 \| undefined`](../../doc/models/original-poi-transaction-3.md) | Optional | - |
| `productCode` | `number \| undefined` | Optional | Product code of item purchased with the transaction.<br><br>**Constraints**: `>= 1`, `<= 20` |
| `eanUpc` | `number \| undefined` | Optional | Standard product code of item purchased with the transaction. |
| `itemAmount` | `number \| undefined` | Optional | Total amount of the item line.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `currency` | `string \| undefined` | Optional | Currency of a monetary amount.<br><br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  EntryMode,
  IdentificationType11,
  StoredValueAccountType1,
  StoredValueData,
  StoredValueTransactionType1,
} from 'adyenlib';

const storedValueData: StoredValueData = {
  storedValueTransactionType: StoredValueTransactionType1.Reserve,
  storedValueProvider: 'StoredValueProvider8',
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
  originalPoiTransaction: {
    saleId: 'SaleID6',
    poiid: 'POIID0',
    poiTransactionId: {
      transactionId: 'TransactionID2',
      timeStamp: '2016-03-13T12:52:32.123Z',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    reuseCardDataFlag: false,
    approvalCode: 'ApprovalCode0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  productCode: 20,
  eanUpc: 18,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

