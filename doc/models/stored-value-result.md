
# Stored Value Result

For each stored value card loaded or reloaded, in the StoredValue response message.
Result of loading/reloading a stored value card.

*This model accepts additional fields of type unknown.*

## Structure

`StoredValueResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `storedValueTransactionType` | [`StoredValueTransactionType2`](../../doc/models/stored-value-transaction-type-2.md) | Required | - |
| `productCode` | `number \| undefined` | Optional | Product code of item purchased with the transaction.<br>Copy.<br><br>**Constraints**: `>= 1`, `<= 20` |
| `eanUpc` | `number \| undefined` | Optional | Standard product code of item purchased with the transaction.<br>Copy. |
| `itemAmount` | `number \| undefined` | Optional | Total amount of the item line.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `currency` | `string \| undefined` | Optional | Currency of a monetary amount.<br>Copy.<br><br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |
| `storedValueAccountStatus` | [`StoredValueAccountStatus \| undefined`](../../doc/models/stored-value-account-status.md) | Optional | - |
| `hostTransactionId` | [`HostTransactionId \| undefined`](../../doc/models/host-transaction-id.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  EntryMode,
  IdentificationType11,
  StoredValueAccountType1,
  StoredValueResult,
  StoredValueTransactionType2,
} from 'adyen';

const storedValueResult: StoredValueResult = {
  storedValueTransactionType: StoredValueTransactionType2.Load,
  productCode: 20,
  eanUpc: 38,
  itemAmount: 211.2,
  currency: 'Currency4',
  storedValueAccountStatus: {
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
    currentBalance: 45.56,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

