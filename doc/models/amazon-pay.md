
# Amazon Pay

## Structure

`AmazonPay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amazonPayToken` | `string \| undefined` | Optional | This is the `amazonPayToken` that you obtained from the [Get Checkout Session](https://amazon-pay-acquirer-guide.s3-eu-west-1.amazonaws.com/v1/amazon-pay-api-v2/checkout-session.html#get-checkout-session) response. This token is used for API only integration specifically. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `checkoutSessionId` | `string \| undefined` | Optional | The `checkoutSessionId` is used to identify the checkout session at the Amazon Pay side. This field is required only for drop-in and components integration, where it replaces the amazonPayToken. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type4Enum \| undefined`](../../doc/models/type-4-enum.md) | Optional | **amazonpay**<br><br>**Default**: `Type4Enum.Amazonpay` |

## Example

```ts
import { AmazonPay, Type4Enum } from 'adyen';

const amazonPay: AmazonPay = {
  amazonPayToken: 'amazonPayToken4',
  checkoutAttemptId: 'checkoutAttemptId2',
  checkoutSessionId: 'checkoutSessionId6',
  sdkData: 'sdkData4',
  type: Type4Enum.Amazonpay,
};
```

