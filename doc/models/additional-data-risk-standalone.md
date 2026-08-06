
# Additional Data Risk Standalone

*This model accepts additional fields of type unknown.*

## Structure

`AdditionalDataRiskStandalone`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `payPalCountryCode` | `string \| undefined` | Optional | Shopper's country of residence in the form of ISO standard 3166 2-character country codes. |
| `payPalEmailId` | `string \| undefined` | Optional | Shopper's email. |
| `payPalFirstName` | `string \| undefined` | Optional | Shopper's first name. |
| `payPalLastName` | `string \| undefined` | Optional | Shopper's last name. |
| `payPalPayerId` | `string \| undefined` | Optional | Unique PayPal Customer Account identification number. Character length and limitations: 13 single-byte alphanumeric characters. |
| `payPalPhone` | `string \| undefined` | Optional | Shopper's phone number. |
| `payPalProtectionEligibility` | `string \| undefined` | Optional | Allowed values:<br><br>* **Eligible** — Merchant is protected by PayPal's Seller Protection Policy for Unauthorized Payments and Item Not Received.<br><br>* **PartiallyEligible** — Merchant is protected by PayPal's Seller Protection Policy for Item Not Received.<br><br>* **Ineligible** — Merchant is not protected under the Seller Protection Policy. |
| `payPalTransactionId` | `string \| undefined` | Optional | Unique transaction ID of the payment. |
| `avsResultRaw` | `string \| undefined` | Optional | Raw AVS result received from the acquirer, where available. Example: D |
| `bin` | `string \| undefined` | Optional | The Bank Identification Number of a credit card, which is the first six digits of a card number. Required for [tokenized card request](https://docs.adyen.com/online-payments/tokenization). |
| `cvcResultRaw` | `string \| undefined` | Optional | Raw CVC result received from the acquirer, where available. Example: 1 |
| `riskToken` | `string \| undefined` | Optional | Unique identifier or token for the shopper's card details. |
| `threeDAuthenticated` | `string \| undefined` | Optional | A Boolean value indicating whether 3DS authentication was completed on this payment. Example: true |
| `threeDOffered` | `string \| undefined` | Optional | A Boolean value indicating whether 3DS was offered for this payment. Example: true |
| `tokenDataType` | `string \| undefined` | Optional | Required for PayPal payments only. The only supported value is: **paypal**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AdditionalDataRiskStandalone } from 'adyen';

const additionalDataRiskStandalone: AdditionalDataRiskStandalone = {
  payPalCountryCode: 'PayPal.CountryCode4',
  payPalEmailId: 'PayPal.EmailId4',
  payPalFirstName: 'PayPal.FirstName8',
  payPalLastName: 'PayPal.LastName4',
  payPalPayerId: 'PayPal.PayerId4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

