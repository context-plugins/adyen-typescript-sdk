
# UPI Collect

## Structure

`UPICollect`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingSequenceNumber` | `string \| undefined` | Optional | The sequence number for the debit. For example, send **2** if this is the second debit for the subscription. The sequence number is included in the notification sent to the shopper. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `shopperNotificationReference` | `string \| undefined` | Optional | The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used for recurring payment only. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | `string` | Required, Constant | **upi_collect**<br><br>**Value**: `'upi_collect'` |
| `virtualPaymentAddress` | `string \| undefined` | Optional | The virtual payment address for UPI. |

## Example

```ts
import { UPICollect } from 'adyen';

const uPICollect: UPICollect = {
  type: 'upi_collect',
  billingSequenceNumber: 'billingSequenceNumber6',
  checkoutAttemptId: 'checkoutAttemptId2',
  recurringDetailReference: 'recurringDetailReference6',
  sdkData: 'sdkData4',
  shopperNotificationReference: 'shopperNotificationReference6',
};
```

