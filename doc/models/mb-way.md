
# Mb Way

*This model accepts additional fields of type unknown.*

## Structure

`MbWay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `shopperEmail` | `string` | Required | - |
| `telephoneNumber` | `string` | Required | - |
| `type` | [`Type36 \| undefined`](../../doc/models/type-36.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MbWay, Type36 } from 'adyenlib';

const mbWay: MbWay = {
  shopperEmail: 'shopperEmail4',
  telephoneNumber: 'telephoneNumber2',
  checkoutAttemptId: 'checkoutAttemptId6',
  sdkData: 'sdkData0',
  type: Type36.Mbway,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

