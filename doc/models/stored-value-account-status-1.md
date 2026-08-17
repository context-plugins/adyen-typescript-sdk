
# Stored Value Account Status 1

Data related to the result of the stored value card transaction.

## Structure

`StoredValueAccountStatus1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `storedValueAccountID` | [`StoredValueAccountID`](../../doc/models/stored-value-account-id.md) | Required | Identification of the stored value account or the stored value card and the associated product sold by the Sale System for stored value requests. |
| `currentBalance` | `number \| undefined` | Optional | If relevant and known.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |

## Example

```ts
import {
  EntryModeEnum,
  IdentificationType11Enum,
  StoredValueAccountStatus1,
  StoredValueAccountType1Enum,
} from 'adyen';

const storedValueAccountStatus1: StoredValueAccountStatus1 = {
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
  currentBalance: 226.02,
};
```

