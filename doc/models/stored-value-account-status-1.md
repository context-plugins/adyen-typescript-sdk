
# Stored Value Account Status 1

Data related to the result of the stored value card transaction.

*This model accepts additional fields of type unknown.*

## Structure

`StoredValueAccountStatus1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `storedValueAccountId` | [`StoredValueAccountId2`](../../doc/models/stored-value-account-id-2.md) | Required | - |
| `currentBalance` | `number \| undefined` | Optional | If relevant and known.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  EntryMode,
  IdentificationType11,
  StoredValueAccountStatus1,
  StoredValueAccountType1,
} from 'adyenlib';

const storedValueAccountStatus1: StoredValueAccountStatus1 = {
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
  currentBalance: 226.02,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

