
# Mobile Pay

*This model accepts additional fields of type unknown.*

## Structure

`MobilePay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type37 \| undefined`](../../doc/models/type-37.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MobilePay, Type37 } from 'adyenlib';

const mobilePay: MobilePay = {
  checkoutAttemptId: 'checkoutAttemptId6',
  sdkData: 'sdkData0',
  type: Type37.Mobilepay,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

