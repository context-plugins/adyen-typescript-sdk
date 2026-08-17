
# Masterpass

## Structure

`Masterpass`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `fundingSource` | [`FundingSourceEnum \| undefined`](../../doc/models/funding-source-enum.md) | Optional | The funding source that should be used when multiple sources are available. For Brazilian combo cards, by default the funding source is credit. To use debit, set this value to **debit**. |
| `masterpassTransactionId` | `string` | Required | The Masterpass transaction ID. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type35Enum \| undefined`](../../doc/models/type-35-enum.md) | Optional | **masterpass**<br><br>**Default**: `Type35Enum.Masterpass` |

## Example

```ts
import { FundingSourceEnum, Masterpass, Type35Enum } from 'adyen';

const masterpass: Masterpass = {
  masterpassTransactionId: 'masterpassTransactionId6',
  checkoutAttemptId: 'checkoutAttemptId8',
  fundingSource: FundingSourceEnum.Debit,
  sdkData: 'sdkData8',
  type: Type35Enum.Masterpass,
};
```

