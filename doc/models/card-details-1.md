
# Card Details 1

The payment method used by the shopper.

*This model accepts additional fields of type unknown.*

## Structure

`CardDetails1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingSequenceNumber` | `string \| undefined` | Optional | The sequence number for the debit. For example, send **2** if this is the second debit for the subscription. The sequence number is included in the notification sent to the shopper. |
| `brand` | `string \| undefined` | Optional | Secondary brand of the card. For example: **plastix**, **hmclub**. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `cupsecureplusSmscode` | `string \| undefined` | Optional | - |
| `cvc` | `string \| undefined` | Optional | The card verification code. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). |
| `encryptedCard` | `string \| undefined` | Optional | Only include this for JSON Web Encryption (JWE) implementations. The JWE-encrypted card details.<br><br>**Constraints**: *Maximum Length*: `40000` |
| `encryptedCardNumber` | `string \| undefined` | Optional | The encrypted card number.<br><br>**Constraints**: *Maximum Length*: `15000` |
| `encryptedExpiryMonth` | `string \| undefined` | Optional | The encrypted card expiry month.<br><br>**Constraints**: *Maximum Length*: `15000` |
| `encryptedExpiryYear` | `string \| undefined` | Optional | The encrypted card expiry year.<br><br>**Constraints**: *Maximum Length*: `15000` |
| `encryptedPassword` | `string \| undefined` | Optional | This field contains an encrypted, one-time password or an authentication code provided by the cardholder.<br><br>**Constraints**: *Maximum Length*: `15000` |
| `encryptedSecurityCode` | `string \| undefined` | Optional | The encrypted card verification code.<br><br>**Constraints**: *Maximum Length*: `15000` |
| `expiryMonth` | `string \| undefined` | Optional | The card expiry month. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). |
| `expiryYear` | `string \| undefined` | Optional | The card expiry year. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). |
| `fastlaneData` | `string \| undefined` | Optional | The encoded fastlane data blob |
| `fundingSource` | [`FundingSource \| undefined`](../../doc/models/funding-source.md) | Optional | - |
| `holderName` | `string \| undefined` | Optional | The name of the card holder.<br><br>**Constraints**: *Maximum Length*: `15000` |
| `networkPaymentReference` | `string \| undefined` | Optional | The transaction identifier from card schemes. This is the [`networkTxReference`](https://docs.adyen.com/api-explorer/Checkout/latest/post/payments#responses-200-additionalData-ResponseAdditionalDataCommon-networkTxReference) from the response to the first payment. |
| `number` | `string \| undefined` | Optional | The card number. Only collect raw card data if you are [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide). |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `shopperNotificationReference` | `string \| undefined` | Optional | The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used only for recurring payments in India. |
| `srcCorrelationId` | `string \| undefined` | Optional | An identifier used for the Click to Pay transaction. |
| `srcDigitalCardId` | `string \| undefined` | Optional | The SRC reference for the Click to Pay token. |
| `srcScheme` | `string \| undefined` | Optional | The scheme that is being used for Click to Pay. |
| `srcTokenReference` | `string \| undefined` | Optional | The reference for the Click to Pay token. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `threeDs2SdkVersion` | `string \| undefined` | Optional | Required for mobile integrations. Version of the 3D Secure 2 mobile SDK.<br><br>**Constraints**: *Maximum Length*: `12` |
| `type` | [`Type141 \| undefined`](../../doc/models/type-141.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CardDetails1 } from 'adyenlib';

const cardDetails1: CardDetails1 = {
  billingSequenceNumber: 'billingSequenceNumber4',
  brand: 'brand8',
  checkoutAttemptId: 'checkoutAttemptId0',
  cupsecureplusSmscode: 'cupsecureplus.smscode2',
  cvc: 'cvc8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

