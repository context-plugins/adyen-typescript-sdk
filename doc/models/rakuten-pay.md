
# Rakuten Pay

## Structure

`RakutenPay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type47Enum \| undefined`](../../doc/models/type-47-enum.md) | Optional | **rakutenpay**<br><br>**Default**: `Type47Enum.Rakutenpay` |

## Example

```ts
import { RakutenPay, Type47Enum } from 'adyen';

const rakutenPay: RakutenPay = {
  checkoutAttemptId: 'checkoutAttemptId2',
  recurringDetailReference: 'recurringDetailReference6',
  sdkData: 'sdkData4',
  storedPaymentMethodId: 'storedPaymentMethodId0',
  type: Type47Enum.Rakutenpay,
};
```

