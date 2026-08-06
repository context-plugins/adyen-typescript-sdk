
# Stored Value Account Status

*This model accepts additional fields of type unknown.*

## Structure

`StoredValueAccountStatus`

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
  StoredValueAccountStatus,
  StoredValueAccountType1,
} from 'adyen';

const storedValueAccountStatus: StoredValueAccountStatus = {
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
  currentBalance: 141.64,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

