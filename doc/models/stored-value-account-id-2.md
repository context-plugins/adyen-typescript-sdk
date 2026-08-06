
# Stored Value Account Id 2

*This model accepts additional fields of type unknown.*

## Structure

`StoredValueAccountId2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `storedValueAccountType` | [`StoredValueAccountType1`](../../doc/models/stored-value-account-type-1.md) | Required | - |
| `storedValueProvider` | `string \| undefined` | Optional | Identification of the provider of the stored value account load/reload. When the ProductCode is not sufficient to identify the provider host which delivers the load or reload of the stored value account (for example if it contains the identification of the application.)<br><br>**Constraints**: *Pattern*: `^.+$` |
| `ownerName` | `string \| undefined` | Optional | Name of the owner of a stored value account.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `expiryDate` | `number \| undefined` | Optional | Date after which the card cannot be used. If EMV expiry date is present, it overrides Track2 information. Format is MMYY.<br><br>**Constraints**: `>= 4`, `<= 4` |
| `entryMode` | [`EntryMode[]`](../../doc/models/entry-mode.md) | Required | Entry mode of the payment instrument information. In the Payment, Loyalty, or StoredValue Request messages, it informs the POI System the entry mode of the payment instrument information when read by the Sale Terminal. (e.g. because the payment instrument information are a barcode read by the Cashier on a scanner device).<br>Possible values:<br><br>* **Contactless**<br>* **File**<br>* **ICC**<br>* **Keyed**<br>* **MagStripe**<br>* **Manual**<br>* **Mobile**<br>* **RFID**<br>* **Scanned**<br>* **SynchronousICC**<br>* **Tapped** |
| `identificationType` | [`IdentificationType11`](../../doc/models/identification-type-11.md) | Required | - |
| `storedValueId` | `string` | Required | Stored value account identification. The identification of the stored value account conforming to the IdentificationType.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  EntryMode,
  IdentificationType11,
  StoredValueAccountId2,
  StoredValueAccountType1,
} from 'adyen';

const storedValueAccountId2: StoredValueAccountId2 = {
  storedValueAccountType: StoredValueAccountType1.GiftCard,
  entryMode: [
    EntryMode.Rfid
  ],
  identificationType: IdentificationType11.IsoTrack2,
  storedValueId: 'StoredValueID6',
  storedValueProvider: 'StoredValueProvider4',
  ownerName: 'OwnerName8',
  expiryDate: 4,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

