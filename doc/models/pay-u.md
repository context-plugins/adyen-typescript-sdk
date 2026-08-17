
# Pay U

## Structure

`PayU`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `shopperNotificationReference` | `string \| undefined` | Optional | The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used for recurring payment only. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | `string` | Required, Constant | **payu_IN_upi**<br><br>**Value**: `'payu_IN_upi'` |
| `virtualPaymentAddress` | `string \| undefined` | Optional | The virtual payment address for UPI. |

## Example

```ts
import { PayU } from 'adyen';

const payU: PayU = {
  type: 'payu_IN_upi',
  checkoutAttemptId: 'checkoutAttemptId0',
  recurringDetailReference: 'recurringDetailReference4',
  sdkData: 'sdkData6',
  shopperNotificationReference: 'shopperNotificationReference4',
  storedPaymentMethodId: 'storedPaymentMethodId8',
};
```

