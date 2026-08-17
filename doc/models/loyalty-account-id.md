
# Loyalty Account ID

Identification of a Loyalty account.
In the Payment Request message, it allows to identify the loyalty account by the Sale Terminal instead of the POI Terminal (e.g. because the account identification is a bar-code read by the Cashier on a scanner device).

## Structure

`LoyaltyAccountID`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `entryMode` | [`EntryModeEnum[]`](../../doc/models/entry-mode-enum.md) | Required | Entry mode of the payment instrument information. In the Payment, Loyalty or StoredValue Request messages, it informs the POI System the entry mode of the payment instrument information when read by the Sale Terminal. In the Payment, Loyalty or StoredValue Response messages, it informs the Sale System the entry mode of the payment instrument.<br>Possible values:<br><br>* **Contactless**<br>* **File**<br>* **ICC**<br>* **Keyed**<br>* **MagStripe**<br>* **Manual**<br>* **Mobile**<br>* **RFID**<br>* **Scanned**<br>* **SynchronousICC**<br>* **Tapped** |
| `identificationType` | [`IdentificationType11Enum`](../../doc/models/identification-type-11-enum.md) | Required | Type of account identification. In a request message, it informs the POI System the type of the account or card identification, when provided by the Sale Terminal. (e.g. because the card information is a barcode read by the Cashier on a scanner device). In a response message, it informs the Sale System the type of the account or card identification.<br>Possible values:<br><br>* **AccountNumber**<br>* **BarCode**<br>* **ISOTrack2**<br>* **PAN**<br>* **PhoneNumber** |
| `identificationSupport` | [`IdentificationSupport1Enum \| undefined`](../../doc/models/identification-support-1-enum.md) | Optional | Support of the loyalty account identification. Allows knowing where and how you have found the loyalty account identification.<br>Possible values:<br><br>* **HybridCard**<br>* **LinkedCard**<br>* **LoyaltyCard**<br>* **NoCard** |
| `loyaltyID` | `string` | Required | Loyalty account identification conforming to the IdentificationType. |

## Example

```ts
import {
  EntryModeEnum,
  IdentificationSupport1Enum,
  IdentificationType11Enum,
  LoyaltyAccountID,
} from 'adyen';

const loyaltyAccountID: LoyaltyAccountID = {
  entryMode: [
    EntryModeEnum.MagStripe
  ],
  identificationType: IdentificationType11Enum.AccountNumber,
  loyaltyID: 'LoyaltyID6',
  identificationSupport: IdentificationSupport1Enum.NoCard,
};
```

