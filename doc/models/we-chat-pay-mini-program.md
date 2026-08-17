
# We Chat Pay Mini Program

## Structure

`WeChatPayMiniProgram`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `appId` | `string \| undefined` | Optional | - |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `openid` | `string \| undefined` | Optional | - |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type57Enum \| undefined`](../../doc/models/type-57-enum.md) | Optional | **wechatpayMiniProgram**<br><br>**Default**: `Type57Enum.WechatpayMiniProgram` |

## Example

```ts
import { Type57Enum, WeChatPayMiniProgram } from 'adyen';

const weChatPayMiniProgram: WeChatPayMiniProgram = {
  appId: 'appId8',
  checkoutAttemptId: 'checkoutAttemptId8',
  openid: 'openid2',
  recurringDetailReference: 'recurringDetailReference2',
  sdkData: 'sdkData8',
  type: Type57Enum.WechatpayMiniProgram,
};
```

