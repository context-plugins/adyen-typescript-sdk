
# Apple Pay Details

*This model accepts additional fields of type unknown.*

## Structure

`ApplePayDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applePayToken` | `string` | Required | The stringified and base64 encoded `paymentData` you retrieved from the Apple framework.<br><br>**Constraints**: *Maximum Length*: `10000` |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `fundingSource` | [`FundingSource \| undefined`](../../doc/models/funding-source.md) | Optional | - |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type71 \| undefined`](../../doc/models/type-71.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ApplePayDetails, FundingSource } from 'adyen';

const applePayDetails: ApplePayDetails = {
  applePayToken: 'applePayToken8',
  checkoutAttemptId: 'checkoutAttemptId2',
  fundingSource: FundingSource.Credit,
  recurringDetailReference: 'recurringDetailReference6',
  sdkData: 'sdkData4',
  storedPaymentMethodId: 'storedPaymentMethodId0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

