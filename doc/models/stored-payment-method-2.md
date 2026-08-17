
# Stored Payment Method 2

## Structure

`StoredPaymentMethod2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `issuer` | `string` | Required | The issuer id of the shopper's selected bank. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type31Enum`](../../doc/models/type-31-enum.md) | Required | **genericissuer** |

## Example

```ts
import { StoredPaymentMethod2, Type31Enum } from 'adyen';

const storedPaymentMethod2: StoredPaymentMethod2 = {
  issuer: 'issuer0',
  type: Type31Enum.OnlineBankingPL,
  checkoutAttemptId: 'checkoutAttemptId6',
  recurringDetailReference: 'recurringDetailReference0',
  sdkData: 'sdkData0',
  storedPaymentMethodId: 'storedPaymentMethodId4',
};
```

