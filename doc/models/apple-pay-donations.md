
# Apple Pay Donations

## Structure

`ApplePayDonations`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `applePayToken` | `string` | Required | The stringified and base64 encoded `paymentData` you retrieved from the Apple framework.<br><br>**Constraints**: *Maximum Length*: `10000` |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `fundingSource` | [`FundingSourceEnum \| undefined`](../../doc/models/funding-source-enum.md) | Optional | The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type7Enum \| undefined`](../../doc/models/type-7-enum.md) | Optional | **applepay**<br><br>**Default**: `Type7Enum.Applepay` |

## Example

```ts
import { ApplePayDonations, FundingSourceEnum, Type7Enum } from 'adyen';

const applePayDonations: ApplePayDonations = {
  applePayToken: 'applePayToken0',
  checkoutAttemptId: 'checkoutAttemptId4',
  fundingSource: FundingSourceEnum.Credit,
  recurringDetailReference: 'recurringDetailReference8',
  sdkData: 'sdkData2',
  storedPaymentMethodId: 'storedPaymentMethodId2',
  type: Type7Enum.Applepay,
};
```

