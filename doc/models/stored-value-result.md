
# Stored Value Result

For each stored value card loaded or reloaded, in the StoredValue response message.
Result of loading/reloading a stored value card.

## Structure

`StoredValueResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `storedValueTransactionType` | [`StoredValueTransactionType2Enum`](../../doc/models/stored-value-transaction-type-2-enum.md) | Required | Identification of operation to proceed on the stored value account or the stored value card.<br>Copy.<br>Possible values:<br><br>* **Activate**<br>* **Duplicate**<br>* **Load**<br>* **Reserve**<br>* **Reverse**<br>* **Unload** |
| `productCode` | `number \| undefined` | Optional | Product code of item purchased with the transaction.<br>Copy.<br><br>**Constraints**: `>= 1`, `<= 20` |
| `eanUpc` | `number \| undefined` | Optional | Standard product code of item purchased with the transaction.<br>Copy. |
| `itemAmount` | `number \| undefined` | Optional | Total amount of the item line.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `currency` | `string \| undefined` | Optional | Currency of a monetary amount.<br>Copy.<br><br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |
| `storedValueAccountStatus` | [`StoredValueAccountStatus1 \| undefined`](../../doc/models/stored-value-account-status-1.md) | Optional | Data related to the result of the stored value card transaction. |
| `hostTransactionID` | [`TransactionIDType7 \| undefined`](../../doc/models/transaction-id-type-7.md) | Optional | Identification of the transaction by the host in charge of the stored value transaction.<br>If provided by the Host. |

## Example

```ts
import {
  EntryModeEnum,
  IdentificationType11Enum,
  StoredValueAccountType1Enum,
  StoredValueResult,
  StoredValueTransactionType2Enum,
} from 'adyen';

const storedValueResult: StoredValueResult = {
  storedValueTransactionType: StoredValueTransactionType2Enum.Load,
  productCode: 20,
  eanUpc: 38,
  itemAmount: 211.2,
  currency: 'Currency4',
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
};
```

