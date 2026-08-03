
# Transaction Conditions 1

*This model accepts additional fields of type unknown.*

## Structure

`TransactionConditions1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowedPaymentBrand` | `string[] \| undefined` | Optional | Payment brands accepted for this transaction.<br>Card payment brands allowed by the Sale System for the payment transaction.<br>Restrict brand if data sent.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `acquirerId` | `number[] \| undefined` | Optional | Identification of the Acquirer.<br>Restrict to these Acquirer if present. |
| `debitPreferredFlag` | `boolean \| undefined` | Optional | The preferred type of payment is a debit transaction rather than a credit transaction. |
| `allowedLoyaltyBrand` | `string[] \| undefined` | Optional | Loyalty brands or programs allowed by the Sale System for the loyalty transaction.<br>Restrict brand if data sent.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `loyaltyHandling` | [`LoyaltyHandling1 \| undefined`](../../doc/models/loyalty-handling-1.md) | Optional | - |
| `customerLanguage` | `string \| undefined` | Optional | The language used on the terminal screen or in text printed by the terminal.<br>Typical use case is setting the language on unattended terminals. Format: two-character [ISO 639:2023](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format.<br><br>**Constraints**: *Pattern*: `^[a-z]{2,2}$` |
| `forceOnlineFlag` | `boolean \| undefined` | Optional | Indicates if the Cashier requires POI forces online access to the Acquirer.<br>Go online if data sent.<br><br>**Default**: `false` |
| `forceEntryMode` | [`ForceEntryMode[] \| undefined`](../../doc/models/force-entry-mode.md) | Optional | Payment instrument entry mode requested by the Sale System.<br>Restrict entry mode if sent.<br>Possible values:<br><br>* **CheckReader**<br>* **Contactless**<br>* **File**<br>* **ICC**<br>* **Keyed**<br>* **MagStripe**<br>* **Manual**<br>* **RFID**<br>* **Scanned**<br>* **SynchronousICC**<br>* **Tapped** |
| `merchantCategoryCode` | `string \| undefined` | Optional | The code which identifies the category of the transaction (MCC).<br>The payment implies a specific MCC.<br><br>**Constraints**: *Pattern*: `^.{3,4}$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { LoyaltyHandling1, TransactionConditions1 } from 'adyenlib';

const transactionConditions1: TransactionConditions1 = {
  allowedPaymentBrand: [
    'AllowedPaymentBrand4',
    'AllowedPaymentBrand5'
  ],
  acquirerId: [
    242,
    243
  ],
  debitPreferredFlag: false,
  allowedLoyaltyBrand: [
    'AllowedLoyaltyBrand2'
  ],
  loyaltyHandling: LoyaltyHandling1.Required,
  forceOnlineFlag: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

