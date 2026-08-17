
# Loyalty Account

This data structure conveys the identification of the account and the associated loyalty brand.
Data related to a loyalty account processed in the transaction.

## Structure

`LoyaltyAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loyaltyAccountID` | [`LoyaltyAccountID2`](../../doc/models/loyalty-account-id-2.md) | Required | Identification of a Loyalty account. |
| `loyaltyBrand` | `string \| undefined` | Optional | Identification of a Loyalty brand.<br>If a card is analysed.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import {
  EntryModeEnum,
  IdentificationSupport1Enum,
  IdentificationType11Enum,
  LoyaltyAccount,
} from 'adyen';

const loyaltyAccount: LoyaltyAccount = {
  loyaltyAccountID: {
    entryMode: [
      EntryModeEnum.File
    ],
    identificationType: IdentificationType11Enum.ISOTrack2,
    loyaltyID: 'LoyaltyID4',
    identificationSupport: IdentificationSupport1Enum.HybridCard,
  },
  loyaltyBrand: 'LoyaltyBrand2',
};
```

