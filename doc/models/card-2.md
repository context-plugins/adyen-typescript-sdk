
# Card 2

Credit card data.

Optional if `shopperReference` and `selectedRecurringDetailReference` are provided.

*This model accepts additional fields of type unknown.*

## Structure

`Card2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cvc` | `string \| undefined` | Optional | The [card verification code](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid) (1-20 characters). Depending on the card brand, it is known also as:<br><br>* CVV2/CVC2 – length: 3 digits<br>* CID – length: 4 digits<br><br>> If you are using [Client-Side Encryption](https://docs.adyen.com/classic-integration/cse-integration-ecommerce), the CVC code is present in the encrypted data. You must never post the card details to the server.<br>> This field must be always present in a [one-click payment request](https://docs.adyen.com/classic-integration/recurring-payments).<br>> When this value is returned in a response, it is always empty because it is not stored.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `20` |
| `expiryMonth` | `string \| undefined` | Optional | The card expiry month.<br>Format: 2 digits, zero-padded for single digits. For example:<br><br>* 03 = March<br>* 11 = November<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2` |
| `expiryYear` | `string \| undefined` | Optional | The card expiry year.<br>Format: 4 digits. For example: 2020<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `4` |
| `holderName` | `string \| undefined` | Optional | The name of the cardholder, as printed on the card.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `50` |
| `issueNumber` | `string \| undefined` | Optional | The issue number of the card (for some UK debit cards only).<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2` |
| `number` | `string \| undefined` | Optional | The card number (4-19 characters). Do not use any separators.<br>When this value is returned in a response, only the last 4 digits of the card number are returned.<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `19` |
| `startMonth` | `string \| undefined` | Optional | The month component of the start date (for some UK debit cards only).<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `2` |
| `startYear` | `string \| undefined` | Optional | The year component of the start date (for some UK debit cards only).<br><br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `4` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Card2 } from 'adyen';

const card2: Card2 = {
  cvc: 'cvc4',
  expiryMonth: 'expiryMonth4',
  expiryYear: 'expiryYear6',
  holderName: 'holderName6',
  issueNumber: 'issueNumber2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

