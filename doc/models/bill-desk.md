
# Bill Desk

*This model accepts additional fields of type unknown.*

## Structure

`BillDesk`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string` | Required | The issuer id of the shopper's selected bank. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type121`](../../doc/models/type-121.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BillDesk, Type121 } from 'adyenlib';

const billDesk: BillDesk = {
  issuer: 'issuer0',
  type: Type121.BilldeskOnline,
  checkoutAttemptId: 'checkoutAttemptId6',
  sdkData: 'sdkData0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

