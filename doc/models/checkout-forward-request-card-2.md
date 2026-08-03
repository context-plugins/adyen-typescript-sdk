
# Checkout Forward Request Card 2

The card details.

*This model accepts additional fields of type unknown.*

## Structure

`CheckoutForwardRequestCard2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cvc` | `string \| undefined` | Optional | The [card verification code](https://docs.adyen.com/payments-fundamentals/payment-glossary#card-security-code-cvc-cvv-cid) (1-20 characters). Depending on the card brand, it is also known as:<br><br>* CVV2/CVC2 – length: 3 digits<br>* CID – length: 4 digits |
| `encryptedCardNumber` | `string \| undefined` | Optional | The encrypted card number. |
| `encryptedExpiryMonth` | `string \| undefined` | Optional | The encrypted expiryMonth |
| `encryptedExpiryYear` | `string \| undefined` | Optional | The encrypted card expiry year. |
| `encryptedSecurityCode` | `string \| undefined` | Optional | The encrypted security code. |
| `expiryMonth` | `string \| undefined` | Optional | The card expiry month.<br>Format: 2 digits, zero-padded for single digits. For example:<br><br>* 03 = March<br>* 11 = November |
| `expiryYear` | `string \| undefined` | Optional | The card expiry year. |
| `holderName` | `string \| undefined` | Optional | The name of the cardholder. |
| `number` | `string \| undefined` | Optional | The card number. Only collect raw card data if you are fully [PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide).<br>Format: Do not use separators. |
| `type` | [`Type181 \| undefined`](../../doc/models/type-181.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CheckoutForwardRequestCard2 } from 'adyenlib';

const checkoutForwardRequestCard2: CheckoutForwardRequestCard2 = {
  cvc: 'cvc0',
  encryptedCardNumber: 'encryptedCardNumber4',
  encryptedExpiryMonth: 'encryptedExpiryMonth8',
  encryptedExpiryYear: 'encryptedExpiryYear6',
  encryptedSecurityCode: 'encryptedSecurityCode2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

