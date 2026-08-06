
# Visa Checkout

*This model accepts additional fields of type unknown.*

## Structure

`VisaCheckout`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `fundingSource` | [`FundingSource \| undefined`](../../doc/models/funding-source.md) | Optional | - |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type55 \| undefined`](../../doc/models/type-55.md) | Optional | - |
| `visaCheckoutCallId` | `string` | Required | The Visa Click to Pay Call ID value. When your shopper selects a payment and/or a shipping address from Visa Click to Pay, you will receive a Visa Click to Pay Call ID. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FundingSource, Type55, VisaCheckout } from 'adyen';

const visaCheckout: VisaCheckout = {
  visaCheckoutCallId: 'visaCheckoutCallId8',
  checkoutAttemptId: 'checkoutAttemptId6',
  fundingSource: FundingSource.Credit,
  sdkData: 'sdkData0',
  type: Type55.Visacheckout,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

