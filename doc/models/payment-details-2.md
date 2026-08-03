
# Payment Details 2

*This model accepts additional fields of type unknown.*

## Structure

`PaymentDetails2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type43 \| undefined`](../../doc/models/type-43.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentDetails2, Type43 } from 'adyenlib';

const paymentDetails2: PaymentDetails2 = {
  checkoutAttemptId: 'checkoutAttemptId0',
  sdkData: 'sdkData6',
  type: Type43.MolpayMaybank2U,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

