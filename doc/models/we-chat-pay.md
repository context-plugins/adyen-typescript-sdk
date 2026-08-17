
# We Chat Pay

## Structure

`WeChatPay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type56Enum \| undefined`](../../doc/models/type-56-enum.md) | Optional | **wechatpay**<br><br>**Default**: `Type56Enum.Wechatpay` |

## Example

```ts
import { Type56Enum, WeChatPay } from 'adyen';

const weChatPay: WeChatPay = {
  checkoutAttemptId: 'checkoutAttemptId4',
  sdkData: 'sdkData2',
  type: Type56Enum.Wechatpay,
};
```

