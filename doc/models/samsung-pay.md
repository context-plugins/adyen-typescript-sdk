
# Samsung Pay

## Structure

`SamsungPay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `fundingSource` | [`FundingSourceEnum \| undefined`](../../doc/models/funding-source-enum.md) | Optional | The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `samsungPayToken` | `string` | Required | The payload you received from the Samsung Pay SDK response.<br><br>**Constraints**: *Maximum Length*: `10000` |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type50Enum \| undefined`](../../doc/models/type-50-enum.md) | Optional | **samsungpay**<br><br>**Default**: `Type50Enum.Samsungpay` |

## Example

```ts
import { FundingSourceEnum, SamsungPay, Type50Enum } from 'adyen';

const samsungPay: SamsungPay = {
  samsungPayToken: 'samsungPayToken6',
  checkoutAttemptId: 'checkoutAttemptId4',
  fundingSource: FundingSourceEnum.Credit,
  recurringDetailReference: 'recurringDetailReference8',
  sdkData: 'sdkData2',
  storedPaymentMethodId: 'storedPaymentMethodId2',
  type: Type50Enum.Samsungpay,
};
```

