
# Google Pay Details

## Structure

`GooglePayDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `fundingSource` | [`FundingSourceEnum \| undefined`](../../doc/models/funding-source-enum.md) | Optional | The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**. |
| `googlePayCardNetwork` | `string \| undefined` | Optional | The selected payment card network. |
| `googlePayToken` | `string` | Required | The `token` that you obtained from the [Google Pay API](https://developers.google.com/pay/api/web/reference/response-objects#PaymentData) `PaymentData` response.<br><br>**Constraints**: *Maximum Length*: `10000` |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `threeDS2SdkVersion` | `string \| undefined` | Optional | Required for mobile integrations. Version of the 3D Secure 2 mobile SDK.<br><br>**Constraints**: *Maximum Length*: `12` |
| `type` | [`Type24Enum \| undefined`](../../doc/models/type-24-enum.md) | Optional | **googlepay**, **paywithgoogle**<br><br>**Default**: `Type24Enum.Googlepay` |

## Example

```ts
import { FundingSourceEnum, GooglePayDetails, Type24Enum } from 'adyen';

const googlePayDetails: GooglePayDetails = {
  googlePayToken: 'googlePayToken0',
  checkoutAttemptId: 'checkoutAttemptId4',
  fundingSource: FundingSourceEnum.Debit,
  googlePayCardNetwork: 'googlePayCardNetwork4',
  recurringDetailReference: 'recurringDetailReference8',
  sdkData: 'sdkData2',
  type: Type24Enum.Googlepay,
};
```

