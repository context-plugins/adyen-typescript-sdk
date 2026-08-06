
# Response Additional Data Card

*This model accepts additional fields of type unknown.*

## Structure

`ResponseAdditionalDataCard`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardAltId` | `string \| undefined` | Optional | This is an ALT ID (alternate ID) mapped to the Card PAN.<br><br>> Returned only in case of Ecommerce Card Payment in India |
| `cardBin` | `string \| undefined` | Optional | The first six digits of the card number.<br><br>This is the [Bank Identification Number (BIN)](https://docs.adyen.com/get-started-with-adyen/payment-glossary#bank-identification-number-bin) for card numbers with a six-digit BIN.<br><br>Example: 521234 |
| `cardHolderName` | `string \| undefined` | Optional | The cardholder name passed in the payment request. |
| `cardIssuingBank` | `string \| undefined` | Optional | The bank or the financial institution granting lines of credit through card association branded payment cards. This information can be included when available. |
| `cardIssuingCountry` | `string \| undefined` | Optional | The country where the card was issued.<br><br>Example: US |
| `cardIssuingCurrency` | `string \| undefined` | Optional | The currency in which the card is issued, if this information is available. Provided as the currency code or currency number from the ISO-4217 standard.<br><br>Example: USD |
| `cardPaymentMethod` | `string \| undefined` | Optional | The card payment method used for the transaction.<br><br>Example: amex |
| `cardProductId` | `string \| undefined` | Optional | The Card Product ID represents the type of card following card scheme product definitions and can be returned for Adyen Acquiring service level payments.<br><br>Example values Visa:<br><br>* **A** - Visa Traditional<br>* **B** - Visa Traditional Rewards<br>* **C** - Visa Signature<br>* **D** - Visa Signature Preferred<br>* **F** - Visa Classic<br><br>Example values Mastercard:<br><br>* **MCC** - Mastercard Card<br>* **MCE** - Mastercard Electronic Card<br>* **MCF** - Mastercard Corporate Fleet Card<br>* **MCG** - Gold Mastercard Card<br>* **MCH** - Mastercard Premium Charge<br>* **MCI** - Mastercard Select Debit |
| `cardSummary` | `string \| undefined` | Optional | The last four digits of a card number.<br><br>> Returned only in case of a card payment. |
| `issuerBin` | `string \| undefined` | Optional | The first eight digits of the card number. Only returned if the card number is 16 digits or more.<br><br>This is the [Bank Identification Number (BIN)](https://docs.adyen.com/get-started-with-adyen/payment-glossary#bank-identification-number-bin) for card numbers with an eight-digit BIN.<br><br>Example: 52123423 |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ResponseAdditionalDataCard } from 'adyen';

const responseAdditionalDataCard: ResponseAdditionalDataCard = {
  cardAltId: 'cardAltID2',
  cardBin: 'cardBin4',
  cardHolderName: 'cardHolderName2',
  cardIssuingBank: 'cardIssuingBank4',
  cardIssuingCountry: 'cardIssuingCountry4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

