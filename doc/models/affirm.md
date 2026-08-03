
# Affirm

*This model accepts additional fields of type unknown.*

## Structure

`Affirm`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type12 \| undefined`](../../doc/models/type-12.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Affirm, Type12 } from 'adyenlib';

const affirm: Affirm = {
  checkoutAttemptId: 'checkoutAttemptId2',
  sdkData: 'sdkData4',
  type: Type12.Affirm,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

