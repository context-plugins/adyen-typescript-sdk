
# Pay by Bank

*This model accepts additional fields of type unknown.*

## Structure

`PayByBank`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string \| undefined` | Optional | The PayByBank issuer value of the shopper's selected bank. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type75`](../../doc/models/type-75.md) | Required | **paybybank** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayByBank, Type75 } from 'adyenlib';

const payByBank: PayByBank = {
  type: Type75.Paybybank,
  checkoutAttemptId: 'checkoutAttemptId0',
  issuer: 'issuer4',
  sdkData: 'sdkData6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

