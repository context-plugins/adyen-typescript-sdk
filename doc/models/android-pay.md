
# Android Pay

*This model accepts additional fields of type unknown.*

## Structure

`AndroidPay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type61 \| undefined`](../../doc/models/type-61.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AndroidPay, Type61 } from 'adyenlib';

const androidPay: AndroidPay = {
  checkoutAttemptId: 'checkoutAttemptId0',
  sdkData: 'sdkData4',
  type: Type61.Androidpay,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

