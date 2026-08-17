
# Alma

## Structure

`Alma`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `feeType` | [`FeeTypeEnum \| undefined`](../../doc/models/fee-type-enum.md) | Optional | **Alma payment request fee type** |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type3Enum \| undefined`](../../doc/models/type-3-enum.md) | Optional | The payment method type. |

## Example

```ts
import { Alma, FeeTypeEnum, Type3Enum } from 'adyen';

const alma: Alma = {
  checkoutAttemptId: 'checkoutAttemptId2',
  feeType: FeeTypeEnum.MerchantPays,
  sdkData: 'sdkData4',
  type: Type3Enum.Alma,
};
```

