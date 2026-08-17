
# Payment Method to Store

## Structure

`PaymentMethodToStore`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brand` | `string \| undefined` | Optional | Secondary brand of the card. For example: **plastix**, **hmclub**. |
| `cvc` | `string \| undefined` | Optional | The card verification code. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). |
| `encryptedCard` | `string \| undefined` | Optional | The encrypted card.<br><br>**Constraints**: *Maximum Length*: `40000` |
| `encryptedCardNumber` | `string \| undefined` | Optional | The encrypted card number.<br><br>**Constraints**: *Maximum Length*: `15000` |
| `encryptedExpiryMonth` | `string \| undefined` | Optional | The encrypted card expiry month.<br><br>**Constraints**: *Maximum Length*: `15000` |
| `encryptedExpiryYear` | `string \| undefined` | Optional | The encrypted card expiry year.<br><br>**Constraints**: *Maximum Length*: `15000` |
| `encryptedSecurityCode` | `string \| undefined` | Optional | The encrypted card verification code.<br><br>**Constraints**: *Maximum Length*: `15000` |
| `expiryMonth` | `string \| undefined` | Optional | The card expiry month. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). |
| `expiryYear` | `string \| undefined` | Optional | The card expiry year. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). |
| `holderName` | `string \| undefined` | Optional | The name of the card holder. |
| `number` | `string \| undefined` | Optional | The card number. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). |
| `type` | `string \| undefined` | Optional | Set to **scheme**. |

## Example

```ts
import { PaymentMethodToStore } from 'adyen';

const paymentMethodToStore: PaymentMethodToStore = {
  brand: 'brand8',
  cvc: 'cvc8',
  encryptedCard: 'encryptedCard6',
  encryptedCardNumber: 'encryptedCardNumber8',
  encryptedExpiryMonth: 'encryptedExpiryMonth0',
};
```

