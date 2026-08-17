
# Android Pay

## Structure

`AndroidPay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type6Enum \| undefined`](../../doc/models/type-6-enum.md) | Optional | **androidpay**<br><br>**Default**: `Type6Enum.Androidpay` |

## Example

```ts
import { AndroidPay, Type6Enum } from 'adyen';

const androidPay: AndroidPay = {
  checkoutAttemptId: 'checkoutAttemptId0',
  sdkData: 'sdkData4',
  type: Type6Enum.Androidpay,
};
```

