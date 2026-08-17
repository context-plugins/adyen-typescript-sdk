
# MB Way

## Structure

`MBWay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `shopperEmail` | `string` | Required | - |
| `telephoneNumber` | `string` | Required | - |
| `type` | [`Type36Enum \| undefined`](../../doc/models/type-36-enum.md) | Optional | **mbway**<br><br>**Default**: `Type36Enum.Mbway` |

## Example

```ts
import { MBWay, Type36Enum } from 'adyen';

const mBWay: MBWay = {
  shopperEmail: 'shopperEmail0',
  telephoneNumber: 'telephoneNumber8',
  checkoutAttemptId: 'checkoutAttemptId2',
  sdkData: 'sdkData4',
  type: Type36Enum.Mbway,
};
```

