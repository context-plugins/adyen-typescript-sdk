
# Mobile Pay

## Structure

`MobilePay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `type` | [`Type37Enum \| undefined`](../../doc/models/type-37-enum.md) | Optional | **mobilepay**<br><br>**Default**: `Type37Enum.Mobilepay` |

## Example

```ts
import { MobilePay, Type37Enum } from 'adyen';

const mobilePay: MobilePay = {
  checkoutAttemptId: 'checkoutAttemptId6',
  sdkData: 'sdkData0',
  type: Type37Enum.Mobilepay,
};
```

