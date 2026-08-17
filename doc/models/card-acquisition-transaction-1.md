
# Card Acquisition Transaction 1

Data related to the payment and loyalty card acquisition.

## Structure

`CardAcquisitionTransaction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowedPaymentBrand` | `string[] \| undefined` | Optional | Card payment brands allowed by the Sale System for the payment transaction.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `allowedLoyaltyBrand` | `string[] \| undefined` | Optional | Loyalty brands or programs allowed by the Sale System for the loyalty transaction.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `loyaltyHandling` | [`LoyaltyHandling2Enum \| undefined`](../../doc/models/loyalty-handling-2-enum.md) | Optional | Type of Loyalty processing requested by the Sale System. An way to specify what the POI has to handle concerning the loyalty.<br>Possible values:<br><br>* **Allowed**<br>* **Forbidden**<br>* **Processed**<br>* **Proposed**<br>* **Required** |
| `customerLanguage` | `string \| undefined` | Optional | The language used on the terminal screen or in text printed by the terminal.<br>Typical use case is setting the language on unattended terminals. Format: two-character [ISO 639:2023](https://en.wikipedia.org/wiki/List_of_ISO_639_language_codes) format.<br><br>**Constraints**: *Pattern*: `^[a-z]{2,2}$` |
| `forceEntryMode` | [`ForceEntryModeEnum[] \| undefined`](../../doc/models/force-entry-mode-enum.md) | Optional | Payment instrument entry mode requested by the Sale System. Avoid retry on an out of order card reading device, when the sale system knows that some card entry modes on the POI do not work.<br>Possible values:<br><br>* **CheckReader**<br>* **Contactless**<br>* **File**<br>* **ICC**<br>* **Keyed**<br>* **MagStripe**<br>* **Manual**<br>* **RFID**<br>* **Scanned**<br>* **SynchronousICC**<br>* **Tapped** |
| `forceCustomerSelectionFlag` | `boolean \| undefined` | Optional | Indicates if the Customer realises the selection of the card application. |
| `totalAmount` | `number \| undefined` | Optional | Amount of a transaction. In the Card Acquisition Request message, it allows the processing of a contactless card.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `paymentType` | [`PaymentType1Enum \| undefined`](../../doc/models/payment-type-1-enum.md) | Optional | Type of payment transaction. Elements requested by the Sale System that are related to the payment only.<br>Possible values:<br><br>* **CashAdvance**<br>* **CashDeposit**<br>* **Completion**<br>* **FirstReservation**<br>* **Instalment**<br>* **IssuerInstalment**<br>* **Normal**<br>* **OneTimeReservation**<br>* **PaidOut**<br>* **Recurring**<br>* **Refund**<br>* **UpdateReservation** |
| `cashBackFlag` | `boolean \| undefined` | Optional | Cash back has been requested with the payment transaction. Allows choice of the Customer language when the POI displays messages or print text to Merchant interface. |

## Example

```ts
import {
  CardAcquisitionTransaction1,
  ForceEntryModeEnum,
  LoyaltyHandling2Enum,
} from 'adyen';

const cardAcquisitionTransaction1: CardAcquisitionTransaction1 = {
  allowedPaymentBrand: [
    'AllowedPaymentBrand4',
    'AllowedPaymentBrand5'
  ],
  allowedLoyaltyBrand: [
    'AllowedLoyaltyBrand2'
  ],
  loyaltyHandling: LoyaltyHandling2Enum.Required,
  customerLanguage: 'CustomerLanguage6',
  forceEntryMode: [
    ForceEntryModeEnum.MagStripe
  ],
};
```

