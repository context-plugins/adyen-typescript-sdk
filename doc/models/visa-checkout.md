
# Visa Checkout

## Structure

`VisaCheckout`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `fundingSource` | [`FundingSourceEnum \| undefined`](../../doc/models/funding-source-enum.md) | Optional | The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type55Enum \| undefined`](../../doc/models/type-55-enum.md) | Optional | **visacheckout**<br><br>**Default**: `Type55Enum.Visacheckout` |
| `visaCheckoutCallId` | `string` | Required | The Visa Click to Pay Call ID value. When your shopper selects a payment and/or a shipping address from Visa Click to Pay, you will receive a Visa Click to Pay Call ID. |

## Example

```ts
import { FundingSourceEnum, Type55Enum, VisaCheckout } from 'adyen';

const visaCheckout: VisaCheckout = {
  visaCheckoutCallId: 'visaCheckoutCallId8',
  checkoutAttemptId: 'checkoutAttemptId6',
  fundingSource: FundingSourceEnum.Credit,
  sdkData: 'sdkData0',
  type: Type55Enum.Visacheckout,
};
```

