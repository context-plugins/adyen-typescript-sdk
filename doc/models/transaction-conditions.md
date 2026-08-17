
# Transaction Conditions

Conditions on which the transaction must be processed.

## Structure

`TransactionConditions`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowedPaymentBrand` | `string[] \| undefined` | Optional | Payment brands accepted for this transaction.<br>Card payment brands allowed by the Sale System for the payment transaction.<br>Restrict brand if data sent.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `acquirerID` | `number[] \| undefined` | Optional | Identification of the Acquirer.<br>Restrict to these Acquirer if present. |
| `debitPreferredFlag` | `boolean \| undefined` | Optional | The preferred type of payment is a debit transaction rather than a credit transaction. |
| `allowedLoyaltyBrand` | `string[] \| undefined` | Optional | Loyalty brands or programs allowed by the Sale System for the loyalty transaction.<br>Restrict brand if data sent.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `loyaltyHandling` | [`LoyaltyHandling1Enum \| undefined`](../../doc/models/loyalty-handling-1-enum.md) | Optional | Type of Loyalty processing requested by the Sale System.<br>Possible values:<br><br>* **Allowed**<br>* **Forbidden**<br>* **Processed**<br>* **Proposed**<br>* **Required** |
| `customerLanguage` | `string \| undefined` | Optional | The language used on the terminal screen or in text printed by the terminal.<br>Typical use case is setting the language on unattended terminals. Format: two-character [ISO 639:2023](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format.<br><br>**Constraints**: *Pattern*: `^[a-z]{2,2}$` |
| `forceOnlineFlag` | `boolean \| undefined` | Optional | Indicates if the Cashier requires POI forces online access to the Acquirer.<br>Go online if data sent.<br><br>**Default**: `false` |
| `forceEntryMode` | [`ForceEntryModeEnum[] \| undefined`](../../doc/models/force-entry-mode-enum.md) | Optional | Payment instrument entry mode requested by the Sale System.<br>Restrict entry mode if sent.<br>Possible values:<br><br>* **CheckReader**<br>* **Contactless**<br>* **File**<br>* **ICC**<br>* **Keyed**<br>* **MagStripe**<br>* **Manual**<br>* **RFID**<br>* **Scanned**<br>* **SynchronousICC**<br>* **Tapped** |
| `merchantCategoryCode` | `string \| undefined` | Optional | The code which identifies the category of the transaction (MCC).<br>The payment implies a specific MCC.<br><br>**Constraints**: *Pattern*: `^.{3,4}$` |

## Example

```ts
import { LoyaltyHandling1Enum, TransactionConditions } from 'adyen';

const transactionConditions: TransactionConditions = {
  allowedPaymentBrand: [
    'AllowedPaymentBrand4'
  ],
  acquirerID: [
    34
  ],
  debitPreferredFlag: false,
  allowedLoyaltyBrand: [
    'AllowedLoyaltyBrand2',
    'AllowedLoyaltyBrand3',
    'AllowedLoyaltyBrand4'
  ],
  loyaltyHandling: LoyaltyHandling1Enum.Required,
  forceOnlineFlag: false,
};
```

