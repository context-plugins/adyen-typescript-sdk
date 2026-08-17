
# Stored Value Account Status

## Structure

`StoredValueAccountStatus`

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
  StoredValueAccountStatus,
  StoredValueAccountType1Enum,
} from 'adyen';

const storedValueAccountStatus: StoredValueAccountStatus = {
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
  currentBalance: 141.64,
};
```

