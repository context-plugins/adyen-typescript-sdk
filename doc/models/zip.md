
# Zip

## Structure

`Zip`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `clickAndCollect` | `string \| undefined` | Optional | Set this to **true** if the shopper would like to pick up and collect their order, instead of having the goods delivered to them. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type58Enum \| undefined`](../../doc/models/type-58-enum.md) | Optional | **zip**<br><br>**Default**: `Type58Enum.Zip` |

## Example

```ts
import { Type58Enum, Zip } from 'adyen';

const zip: Zip = {
  checkoutAttemptId: 'checkoutAttemptId2',
  clickAndCollect: 'clickAndCollect6',
  recurringDetailReference: 'recurringDetailReference6',
  sdkData: 'sdkData4',
  storedPaymentMethodId: 'storedPaymentMethodId0',
  type: Type58Enum.Zip,
};
```

