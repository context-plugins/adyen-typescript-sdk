
# Checkout Forward Request Card

## Structure

`CheckoutForwardRequestCard`

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
| `type` | [`Type18Enum \| undefined`](../../doc/models/type-18-enum.md) | Optional | Default payment method details. Common for scheme payment methods, and for simple payment method details.<br><br>**Default**: `Type18Enum.Scheme` |

## Example

```ts
import { CheckoutForwardRequestCard, Type18Enum } from 'adyen';

const checkoutForwardRequestCard: CheckoutForwardRequestCard = {
  cvc: 'cvc0',
  encryptedCardNumber: 'encryptedCardNumber4',
  encryptedExpiryMonth: 'encryptedExpiryMonth2',
  encryptedExpiryYear: 'encryptedExpiryYear6',
  encryptedSecurityCode: 'encryptedSecurityCode2',
  type: Type18Enum.Scheme,
};
```

