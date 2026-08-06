
# We Chat Pay

*This model accepts additional fields of type unknown.*

## Structure

`WeChatPay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type56 \| undefined`](../../doc/models/type-56.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Type56, WeChatPay } from 'adyen';

const weChatPay: WeChatPay = {
  checkoutAttemptId: 'checkoutAttemptId4',
  sdkData: 'sdkData2',
  type: Type56.Wechatpay,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

