
# Affirm

## Structure

`Affirm`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type1Enum \| undefined`](../../doc/models/type-1-enum.md) | Optional | **affirm**<br><br>**Default**: `Type1Enum.Affirm` |

## Example

```ts
import { Affirm, Type1Enum } from 'adyen';

const affirm: Affirm = {
  checkoutAttemptId: 'checkoutAttemptId2',
  sdkData: 'sdkData4',
  type: Type1Enum.Affirm,
};
```

