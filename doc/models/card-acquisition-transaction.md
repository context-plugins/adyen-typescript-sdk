
# Card Acquisition Transaction

*This model accepts additional fields of type unknown.*

## Structure

`CardAcquisitionTransaction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowedPaymentBrand` | `string[] \| undefined` | Optional | Card payment brands allowed by the Sale System for the payment transaction.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `allowedLoyaltyBrand` | `string[] \| undefined` | Optional | Loyalty brands or programs allowed by the Sale System for the loyalty transaction.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `loyaltyHandling` | [`LoyaltyHandling2 \| undefined`](../../doc/models/loyalty-handling-2.md) | Optional | - |
| `customerLanguage` | `string \| undefined` | Optional | The language used on the terminal screen or in text printed by the terminal.<br>Typical use case is setting the language on unattended terminals. Format: two-character [ISO 639:2023](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format.<br><br>**Constraints**: *Pattern*: `^[a-z]{2,2}$` |
| `forceEntryMode` | [`ForceEntryMode[] \| undefined`](../../doc/models/force-entry-mode.md) | Optional | Payment instrument entry mode requested by the Sale System. Avoid retry on an out of order card reading device, when the sale system knows that some card entry modes on the POI do not work.<br>Possible values:<br><br>* **CheckReader**<br>* **Contactless**<br>* **File**<br>* **ICC**<br>* **Keyed**<br>* **MagStripe**<br>* **Manual**<br>* **RFID**<br>* **Scanned**<br>* **SynchronousICC**<br>* **Tapped** |
| `forceCustomerSelectionFlag` | `boolean \| undefined` | Optional | Indicates if the Customer realises the selection of the card application. |
| `totalAmount` | `number \| undefined` | Optional | Amount of a transaction. In the Card Acquisition Request message, it allows the processing of a contactless card.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `paymentType` | [`PaymentType1 \| undefined`](../../doc/models/payment-type-1.md) | Optional | - |
| `cashBackFlag` | `boolean \| undefined` | Optional | Cash back has been requested with the payment transaction. Allows choice of the Customer language when the POI displays messages or print text to Merchant interface. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  CardAcquisitionTransaction,
  ForceEntryMode,
  LoyaltyHandling2,
} from 'adyenlib';

const cardAcquisitionTransaction: CardAcquisitionTransaction = {
  allowedPaymentBrand: [
    'AllowedPaymentBrand4',
    'AllowedPaymentBrand5'
  ],
  allowedLoyaltyBrand: [
    'AllowedLoyaltyBrand2'
  ],
  loyaltyHandling: LoyaltyHandling2.Required,
  customerLanguage: 'CustomerLanguage6',
  forceEntryMode: [
    ForceEntryMode.Tapped
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

