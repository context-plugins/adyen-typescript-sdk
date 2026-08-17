
# Stored Value Account ID

Identification of the stored value account or the stored value card and the associated product sold by the Sale System for stored value requests.

## Structure

`StoredValueAccountID`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `storedValueAccountType` | [`StoredValueAccountType1Enum`](../../doc/models/stored-value-account-type-1-enum.md) | Required | Type of stored value account. Allows the distinction of the stored value instrument to access the stored value account.<br>Possible values:<br><br>* **GiftCard**<br>* **Other**<br>* **PhoneCard** |
| `storedValueProvider` | `string \| undefined` | Optional | Identification of the provider of the stored value account load/reload. When the ProductCode is not sufficient to identify the provider host which delivers the load or reload of the stored value account (for example if it contains the identification of the application.)<br><br>**Constraints**: *Pattern*: `^.+$` |
| `ownerName` | `string \| undefined` | Optional | Name of the owner of a stored value account.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `expiryDate` | `number \| undefined` | Optional | Date after which the card cannot be used. If EMV expiry date is present, it overrides Track2 information. Format is MMYY.<br><br>**Constraints**: `>= 4`, `<= 4` |
| `entryMode` | [`EntryModeEnum[]`](../../doc/models/entry-mode-enum.md) | Required | Entry mode of the payment instrument information. In the Payment, Loyalty, or StoredValue Request messages, it informs the POI System the entry mode of the payment instrument information when read by the Sale Terminal. (e.g. because the payment instrument information are a barcode read by the Cashier on a scanner device).<br>Possible values:<br><br>* **Contactless**<br>* **File**<br>* **ICC**<br>* **Keyed**<br>* **MagStripe**<br>* **Manual**<br>* **Mobile**<br>* **RFID**<br>* **Scanned**<br>* **SynchronousICC**<br>* **Tapped** |
| `identificationType` | [`IdentificationType11Enum`](../../doc/models/identification-type-11-enum.md) | Required | Type of account identification. In a request message, it informs the POI System the type of the account or card identification, when provided by the Sale Terminal. (e.g. because the card information is a barcode read by the Cashier on a scanner device). In a response message, it informs the Sale System the type of the account or card identification.<br>Possible values:<br><br>* **AccountNumber**<br>* **BarCode**<br>* **ISOTrack2**<br>* **PAN**<br>* **PhoneNumber** |
| `storedValueID` | `string` | Required | Stored value account identification. The identification of the stored value account conforming to the IdentificationType.<br><br>**Constraints**: *Pattern*: `^.+$` |

## Example

```ts
import {
  EntryModeEnum,
  IdentificationType11Enum,
  StoredValueAccountID,
  StoredValueAccountType1Enum,
} from 'adyen';

const storedValueAccountID: StoredValueAccountID = {
  storedValueAccountType: StoredValueAccountType1Enum.Other,
  entryMode: [
    EntryModeEnum.Manual,
    EntryModeEnum.File
  ],
  identificationType: IdentificationType11Enum.BarCode,
  storedValueID: 'StoredValueID0',
  storedValueProvider: 'StoredValueProvider8',
  ownerName: 'OwnerName2',
  expiryDate: 4,
};
```

