
# Card Bin

*This model accepts additional fields of type unknown.*

## Structure

`CardBin`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `bin` | `string \| undefined` | Optional | The first 6 digit of the card number. Enable this field via merchant account settings. |
| `commercial` | `boolean \| undefined` | Optional | If true, it indicates a commercial card. Enable this field via merchant account settings. |
| `fundingSource` | `string \| undefined` | Optional | The card funding source. Valid values are:<br><br>* CHARGE<br>* CREDIT<br>* DEBIT<br>* DEFERRED_DEBIT<br>* PREPAID<br>* PREPAID_RELOADABLE<br>* PREPAID_NONRELOADABLE<br><br>> Enable this field via merchant account settings. |
| `fundsAvailability` | `string \| undefined` | Optional | Indicates availability of funds.<br><br>Visa:<br><br>* "I" (fast funds are supported)<br>* "N" (otherwise)<br><br>Mastercard:<br><br>* "I" (product type is Prepaid or Debit, or issuing country is in CEE/HGEM list)<br>* "N" (otherwise)<br><br>> Returned when you verify a card BIN or estimate costs, and only if `payoutEligible` is different from "N" or "U". |
| `issuerBin` | `string \| undefined` | Optional | The first 8 digit of the card number. Enable this field via merchant account settings. |
| `issuingBank` | `string \| undefined` | Optional | The issuing bank of the card. |
| `issuingCountry` | `string \| undefined` | Optional | The country where the card was issued from. |
| `issuingCurrency` | `string \| undefined` | Optional | The currency of the card. |
| `paymentMethod` | `string \| undefined` | Optional | The payment method associated with the card (e.g. visa, mc, or amex). |
| `payoutEligible` | `string \| undefined` | Optional | Indicates whether a payout is eligible or not for this card.<br><br>Visa:<br><br>* "Y"<br>* "N"<br><br>Mastercard:<br><br>* "Y" (domestic and cross-border)<br>* "D" (only domestic)<br>* "N" (no MoneySend)<br>* "U" (unknown)<br><br>> Returned when you verify a card BIN or estimate costs, and only if `payoutEligible` is different from "N" or "U". |
| `summary` | `string \| undefined` | Optional | The last four digits of the card number. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CardBin } from 'adyenlib';

const cardBin: CardBin = {
  bin: 'bin6',
  commercial: false,
  fundingSource: 'fundingSource0',
  fundsAvailability: 'fundsAvailability0',
  issuerBin: 'issuerBin8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

