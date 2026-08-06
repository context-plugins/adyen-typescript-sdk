
# Google Pay Info 1

Details to provide if `type` is **googlepay**.

*This model accepts additional fields of type unknown.*

## Structure

`GooglePayInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantId` | `string` | Required | Google Pay [Merchant ID](https://support.google.com/paymentscenter/answer/7163092?hl=en). Character length and limitations: 16 alphanumeric characters or 20 numeric characters.<br><br>**Constraints**: *Minimum Length*: `16`, *Maximum Length*: `20` |
| `reuseMerchantId` | `boolean \| undefined` | Optional | Indicates whether the Google Pay Merchant ID is used for several merchant accounts. Default value: **false**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GooglePayInfo1 } from 'adyen';

const googlePayInfo1: GooglePayInfo1 = {
  merchantId: 'merchantId2',
  reuseMerchantId: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

