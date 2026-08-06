
# Card Data 1

Information related to the payment card used for the transaction.
If PaymentInstrumentType is Card.

*This model accepts additional fields of type unknown.*

## Structure

`CardData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentBrand` | `string \| undefined` | Optional | Type of payment card.<br>If card PAN is readable.<br>Indicates the card used to pay in the PaymentResponse. Sent in the CardAcquisitionResponse, to leave the Cashier to choose between several applications in a smartcard, or several brand in a co-branded card. In this case, the CardAcquisitionRequest.ForceCustomerSelectionFlag must contain the value False. Brands are part of the POI and Sale Systems configurations.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `maskedPan` | `string \| undefined` | Optional | Masked Primary Account Number<br>Part of the PAN is replaced by a string of * characters, to identify a customer account or relationship. Presence of this data element, which replace the PAN when SensitiveCardData is protected and replaced by ProtectedCardData. Alternatively the MaskedPAN can be used as a token to identify a customer.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `paymentAccountRef` | `string \| undefined` | Optional | Reference of the PAN, which identifies the PAN or the card uniquely, named also PAR (Payment Account Reference). This reference may be defined by the card issuer or by a token service provider under the control of the card issuer, and cannot be used for a payment transaction.<br><br>**Constraints**: *Pattern*: `^.+$` |
| `entryMode` | [`EntryMode[] \| undefined`](../../doc/models/entry-mode.md) | Optional | Entry mode of the payment instrument information. In the Payment, Loyalty or StoredValue Request messages, it informs the POI System the entry mode of the payment instrument information when read by the Sale Terminal. In the Payment, Loyalty or StoredValue Response messages, it informs the Sale System the entry mode of the payment instrument.<br>Possible values:<br><br>* **Contactless**<br>* **File**<br>* **ICC**<br>* **Keyed**<br>* **MagStripe**<br>* **Manual**<br>* **Mobile**<br>* **RFID**<br>* **Scanned**<br>* **SynchronousICC**<br>* **Tapped** |
| `cardCountryCode` | `number \| undefined` | Optional | Country Code attached to the card (3 numerics).<br>If available in the card.<br><br>**Constraints**: `>= 3`, `<= 3` |
| `protectedCardData` | `string \| undefined` | Optional | Sensitive information related to the payment card, protected by CMS.<br>SensitiveCardData protected by CMS EnvelopedData. |
| `sensitiveCardData` | [`SensitiveCardData2 \| undefined`](../../doc/models/sensitive-card-data-2.md) | Optional | - |
| `paymentToken` | [`PaymentToken2 \| undefined`](../../doc/models/payment-token-2.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CardData1, EntryMode } from 'adyen';

const cardData1: CardData1 = {
  paymentBrand: 'PaymentBrand6',
  maskedPan: 'MaskedPan4',
  paymentAccountRef: 'PaymentAccountRef4',
  entryMode: [
    EntryMode.SynchronousIcc
  ],
  cardCountryCode: 3,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

