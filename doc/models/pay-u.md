
# Pay U

*This model accepts additional fields of type unknown.*

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
| `type` | [`Type77`](../../doc/models/type-77.md) | Required | **payu_IN_upi** |
| `virtualPaymentAddress` | `string \| undefined` | Optional | The virtual payment address for UPI. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PayU, Type77 } from 'adyenlib';

const payU: PayU = {
  type: Type77.PayuInUpi,
  checkoutAttemptId: 'checkoutAttemptId0',
  recurringDetailReference: 'recurringDetailReference4',
  sdkData: 'sdkData6',
  shopperNotificationReference: 'shopperNotificationReference4',
  storedPaymentMethodId: 'storedPaymentMethodId8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

