
# Amazon Pay

*This model accepts additional fields of type unknown.*

## Structure

`AmazonPay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amazonPayToken` | `string \| undefined` | Optional | This is the `amazonPayToken` that you obtained from the [Get Checkout Session](https://amazon-pay-acquirer-guide.s3-eu-west-1.amazonaws.com/v1/amazon-pay-api-v2/checkout-session.html#get-checkout-session) response. This token is used for API only integration specifically. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `checkoutSessionId` | `string \| undefined` | Optional | The `checkoutSessionId` is used to identify the checkout session at the Amazon Pay side. This field is required only for drop-in and components integration, where it replaces the amazonPayToken. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type41 \| undefined`](../../doc/models/type-41.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AmazonPay, Type41 } from 'adyenlib';

const amazonPay: AmazonPay = {
  amazonPayToken: 'amazonPayToken4',
  checkoutAttemptId: 'checkoutAttemptId2',
  checkoutSessionId: 'checkoutSessionId6',
  sdkData: 'sdkData4',
  type: Type41.Amazonpay,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

