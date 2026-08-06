
# Card Details Request

*This model accepts additional fields of type unknown.*

## Structure

`CardDetailsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `cardNumber` | `string \| undefined` | Optional | A minimum of the first six digits of the card number. The full card number gives the best result.<br><br>You must be [fully PCI compliant](https://docs.adyen.com/development-resources/pci-dss-compliance-guide) to collect raw card data. Alternatively, you can use the `encryptedCardNumber` field. |
| `countryCode` | `string \| undefined` | Optional | The shopper country code.<br><br>Format: [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)<br>Example: NL or DE |
| `encryptedCardNumber` | `string \| undefined` | Optional | The encrypted card number.<br><br>**Constraints**: *Maximum Length*: `15000` |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction. |
| `supportedBrands` | `string[] \| undefined` | Optional | The card brands you support. This is the [`brands`](https://docs.adyen.com/api-explorer/Checkout/latest/post/paymentMethods#responses-200-paymentMethods-brands) array from your [`/paymentMethods`](https://docs.adyen.com/api-explorer/#/CheckoutService/latest/post/paymentMethods) response.<br><br>If not included, our API uses the ones configured for your merchant account and, if provided, the country code. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CardDetailsRequest } from 'adyen';

const cardDetailsRequest: CardDetailsRequest = {
  merchantAccount: 'merchantAccount6',
  cardNumber: 'cardNumber0',
  countryCode: 'countryCode0',
  encryptedCardNumber: 'encryptedCardNumber2',
  supportedBrands: [
    'supportedBrands9',
    'supportedBrands8',
    'supportedBrands7'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

