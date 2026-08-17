
# Pay with Google Donations

## Structure

`PayWithGoogleDonations`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `fundingSource` | [`FundingSourceEnum \| undefined`](../../doc/models/funding-source-enum.md) | Optional | The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**. |
| `googlePayToken` | `string` | Required | The `token` that you obtained from the [Google Pay API](https://developers.google.com/pay/api/web/reference/response-objects#PaymentData) `PaymentData` response.<br><br>**Constraints**: *Maximum Length*: `5000` |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `threeDS2SdkVersion` | `string \| undefined` | Optional | Required for mobile integrations. Version of the 3D Secure 2 mobile SDK.<br><br>**Constraints**: *Maximum Length*: `12` |
| `type` | [`Type26Enum \| undefined`](../../doc/models/type-26-enum.md) | Optional | **paywithgoogle**<br><br>**Default**: `Type26Enum.Paywithgoogle` |

## Example

```ts
import { FundingSourceEnum, PayWithGoogleDonations, Type26Enum } from 'adyen';

const payWithGoogleDonations: PayWithGoogleDonations = {
  googlePayToken: 'googlePayToken4',
  checkoutAttemptId: 'checkoutAttemptId8',
  fundingSource: FundingSourceEnum.Credit,
  recurringDetailReference: 'recurringDetailReference2',
  sdkData: 'sdkData8',
  storedPaymentMethodId: 'storedPaymentMethodId6',
  type: Type26Enum.Paywithgoogle,
};
```

