
# Vipps

## Structure

`Vipps`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `telephoneNumber` | `string` | Required | - |
| `type` | [`Type54Enum \| undefined`](../../doc/models/type-54-enum.md) | Optional | **vipps**<br><br>**Default**: `Type54Enum.Vipps` |

## Example

```ts
import { Type54Enum, Vipps } from 'adyen';

const vipps: Vipps = {
  telephoneNumber: 'telephoneNumber8',
  checkoutAttemptId: 'checkoutAttemptId2',
  recurringDetailReference: 'recurringDetailReference6',
  sdkData: 'sdkData4',
  storedPaymentMethodId: 'storedPaymentMethodId0',
  type: Type54Enum.Vipps,
};
```

