
# Loyalty Account 12

*This model accepts additional fields of type unknown.*

## Structure

`LoyaltyAccount12`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `loyaltyAccountId` | [`LoyaltyAccountId3`](../../doc/models/loyalty-account-id-3.md) | Required | - |
| `loyaltyBrand` | `string \| undefined` | Optional | Identification of a Loyalty brand.<br>If a card is analysed.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  EntryMode,
  IdentificationSupport1,
  IdentificationType11,
  LoyaltyAccount12,
} from 'adyenlib';

const loyaltyAccount12: LoyaltyAccount12 = {
  loyaltyAccountId: {
    entryMode: [
      EntryMode.File
    ],
    identificationType: IdentificationType11.IsoTrack2,
    loyaltyId: 'LoyaltyID4',
    identificationSupport: IdentificationSupport1.HybridCard,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  loyaltyBrand: 'LoyaltyBrand2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

