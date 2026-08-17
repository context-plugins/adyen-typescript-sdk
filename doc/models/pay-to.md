
# Pay To

## Structure

`PayTo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `shopperAccountIdentifier` | `string \| undefined` | Optional | The shopper's banking details or payId reference, used to complete payment. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | [`Type41Enum \| undefined`](../../doc/models/type-41-enum.md) | Optional | **payto**<br><br>**Default**: `Type41Enum.Payto` |

## Example

```ts
import { PayTo, Type41Enum } from 'adyen';

const payTo: PayTo = {
  checkoutAttemptId: 'checkoutAttemptId4',
  recurringDetailReference: 'recurringDetailReference8',
  sdkData: 'sdkData2',
  shopperAccountIdentifier: 'shopperAccountIdentifier8',
  storedPaymentMethodId: 'storedPaymentMethodId2',
  type: Type41Enum.Payto,
};
```

