
# Alma

*This model accepts additional fields of type unknown.*

## Structure

`Alma`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `feeType` | [`FeeType \| undefined`](../../doc/models/fee-type.md) | Optional | - |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type31 \| undefined`](../../doc/models/type-31.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Alma, FeeType, Type31 } from 'adyen';

const alma: Alma = {
  checkoutAttemptId: 'checkoutAttemptId2',
  feeType: FeeType.MerchantPays,
  sdkData: 'sdkData4',
  type: Type31.Alma,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

