
# Loyalty Account Id 3

*This model accepts additional fields of type unknown.*

## Structure

`LoyaltyAccountId3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entryMode` | [`EntryMode[]`](../../doc/models/entry-mode.md) | Required | Entry mode of the payment instrument information. In the Payment, Loyalty or StoredValue Request messages, it informs the POI System the entry mode of the payment instrument information when read by the Sale Terminal. In the Payment, Loyalty or StoredValue Response messages, it informs the Sale System the entry mode of the payment instrument.<br>Possible values:<br><br>* **Contactless**<br>* **File**<br>* **ICC**<br>* **Keyed**<br>* **MagStripe**<br>* **Manual**<br>* **Mobile**<br>* **RFID**<br>* **Scanned**<br>* **SynchronousICC**<br>* **Tapped** |
| `identificationType` | [`IdentificationType11`](../../doc/models/identification-type-11.md) | Required | - |
| `identificationSupport` | [`IdentificationSupport1 \| undefined`](../../doc/models/identification-support-1.md) | Optional | - |
| `loyaltyId` | `string` | Required | Loyalty account identification conforming to the IdentificationType. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  EntryMode,
  IdentificationSupport1,
  IdentificationType11,
  LoyaltyAccountId3,
} from 'adyen';

const loyaltyAccountId3: LoyaltyAccountId3 = {
  entryMode: [
    EntryMode.MagStripe,
    EntryMode.Icc
  ],
  identificationType: IdentificationType11.BarCode,
  loyaltyId: 'LoyaltyID0',
  identificationSupport: IdentificationSupport1.NoCard,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

