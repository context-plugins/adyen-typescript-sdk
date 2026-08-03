
# Merchant Details 2

Additional data for merchants who don't use Adyen as the payment authorisation gateway.

*This model accepts additional fields of type unknown.*

## Structure

`MerchantDetails2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `countryCode` | `string \| undefined` | Optional | 2-letter ISO 3166 country code of the card acceptor location.<br><br>> This parameter is required for the merchants who don't use Adyen as the payment authorisation gateway.<br><br>**Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `enrolledIn3DSecure` | `boolean \| undefined` | Optional | If true, indicates that the merchant is enrolled in 3D Secure for the card network. |
| `mcc` | `string \| undefined` | Optional | The merchant category code (MCC) is a four-digit number which relates to a particular market segment. This code reflects the predominant activity that is conducted by the merchant.<br><br>The list of MCCs can be found [here](https://en.wikipedia.org/wiki/Merchant_category_code). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MerchantDetails2 } from 'adyenlib';

const merchantDetails2: MerchantDetails2 = {
  countryCode: 'countryCode6',
  enrolledIn3DSecure: false,
  mcc: 'mcc8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

