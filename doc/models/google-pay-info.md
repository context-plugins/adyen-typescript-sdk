
# Google Pay Info

*This model accepts additional fields of type unknown.*

## Structure

`GooglePayInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Required | Google Pay [Merchant ID](https://support.google.com/paymentscenter/answer/7163092?hl=en). Character length and limitations: 16 alphanumeric characters or 20 numeric characters.<br><br>**Constraints**: *Minimum Length*: `16`, *Maximum Length*: `20` |
| `reuseMerchantId` | `boolean \| undefined` | Optional | Indicates whether the Google Pay Merchant ID is used for several merchant accounts. Default value: **false**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GooglePayInfo } from 'adyenlib';

const googlePayInfo: GooglePayInfo = {
  merchantId: 'merchantId2',
  reuseMerchantId: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

