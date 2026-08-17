
# UPI Intent

## Structure

`UPIIntent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `appId` | `string \| undefined` | Optional | TPAP (Third Party Application) Id that is being used to make the UPI payment |
| `billingSequenceNumber` | `string \| undefined` | Optional | The sequence number for the debit. For example, send **2** if this is the second debit for the subscription. The sequence number is included in the notification sent to the shopper. |
| `checkoutAttemptId` | `string \| undefined` | Optional | The checkout attempt identifier. |
| `recurringDetailReference` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token. |
| `sdkData` | `string \| undefined` | Optional | Base64-encoded JSON object containing SDK related parameters required by the SDK<br><br>**Constraints**: *Maximum Length*: `50000` |
| `shopperNotificationReference` | `string \| undefined` | Optional | The `shopperNotificationReference` returned in the response when you requested to notify the shopper. Used for recurring payment only. |
| `storedPaymentMethodId` | `string \| undefined` | Optional | This is the `recurringDetailReference` returned in the response when you created the token.<br><br>**Constraints**: *Maximum Length*: `64` |
| `type` | `string` | Required, Constant | **upi_intent**<br><br>**Value**: `'upi_intent'` |

## Example

```ts
import { UPIIntent } from 'adyen';

const uPIIntent: UPIIntent = {
  type: 'upi_intent',
  appId: 'appId8',
  billingSequenceNumber: 'billingSequenceNumber2',
  checkoutAttemptId: 'checkoutAttemptId8',
  recurringDetailReference: 'recurringDetailReference2',
  sdkData: 'sdkData8',
};
```

