
# Pay with Google Details

*This model accepts additional fields of type unknown.*

## Structure

`PayWithGoogleDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `fundingSource` | [`FundingSource \| undefined`](../../doc/models/funding-source.md) | Optional | - |
| `googlePayToken` | `string` | Required | The `token` that you obtained from the [Google Pay API](https://developers.google.com/pay/api/web/reference/response-objects#PaymentData) `PaymentData` response.<br><br>**Constraints**: *Maximum Length*: `5000` |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `threeDs2SdkVersion` | `string \| undefined` | Optional | Required for mobile integrations. Version of the 3D Secure 2 mobile SDK.<br><br>**Constraints**: *Maximum Length*: `12` |
| `type` | [`Type26 \| undefined`](../../doc/models/type-26.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FundingSource, PayWithGoogleDetails } from 'adyen';

const payWithGoogleDetails: PayWithGoogleDetails = {
  googlePayToken: 'googlePayToken0',
  checkoutAttemptId: 'checkoutAttemptId4',
  fundingSource: FundingSource.Debit,
  recurringDetailReference: 'recurringDetailReference8',
  sdkData: 'sdkData2',
  storedPaymentMethodId: 'storedPaymentMethodId2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

