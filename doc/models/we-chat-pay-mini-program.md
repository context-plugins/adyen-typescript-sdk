
# We Chat Pay Mini Program

*This model accepts additional fields of type unknown.*

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
| `type` | [`Type57 \| undefined`](../../doc/models/type-57.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { WeChatPayMiniProgram } from 'adyenlib';

const weChatPayMiniProgram: WeChatPayMiniProgram = {
  appId: 'appId8',
  checkoutAttemptId: 'checkoutAttemptId8',
  openid: 'openid2',
  recurringDetailReference: 'recurringDetailReference2',
  sdkData: 'sdkData8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

