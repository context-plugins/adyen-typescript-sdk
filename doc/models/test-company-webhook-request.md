
# Test Company Webhook Request

*This model accepts additional fields of type unknown.*

## Structure

`TestCompanyWebhookRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantIds` | `string[] \| undefined` | Optional | List of `merchantId` values for which test webhooks will be sent. The list can have a maximum of 20 `merchantId` values.<br><br>If not specified, we send sample notifications to all the merchant accounts that the webhook is configured for. If this is more than 20 merchant accounts, use this list to specify a subset of the merchant accounts for which to send test notifications. |
| `notification` | [`CustomNotification \| undefined`](../../doc/models/custom-notification.md) | Optional | - |
| `types` | `string[] \| undefined` | Optional | List of event codes for which to send test notifications. Only the webhook types below are supported.<br><br>Possible values if webhook `type`: **standard**:<br><br>* **AUTHORISATION**<br>* **CHARGEBACK_REVERSED**<br>* **ORDER_CLOSED**<br>* **ORDER_OPENED**<br>* **PAIDOUT_REVERSED**<br>* **PAYOUT_THIRDPARTY**<br>* **REFUNDED_REVERSED**<br>* **REFUND_WITH_DATA**<br>* **REPORT_AVAILABLE**<br>* **CUSTOM** - set your custom notification fields in the [`notification`](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/companies/{companyId}/webhooks/{webhookId}/test__reqParam_notification) object.<br><br>Possible values if webhook `type`: **banktransfer-notification**:<br><br>* **PENDING**<br><br>Possible values if webhook `type`: **report-notification**:<br><br>* **REPORT_AVAILABLE**<br><br>Possible values if webhook `type`: **ideal-notification**:<br><br>* **AUTHORISATION**<br><br>Possible values if webhook `type`: **pending-notification**:<br><br>* **PENDING** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TestCompanyWebhookRequest } from 'adyen';

const testCompanyWebhookRequest: TestCompanyWebhookRequest = {
  merchantIds: [
    'merchantIds5',
    'merchantIds6'
  ],
  notification: {
    amount: {
      currency: 'currency2',
      value: BigInt(110),
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    eventCode: 'eventCode2',
    eventDate: '2016-03-13T12:52:32.123Z',
    merchantReference: 'merchantReference4',
    paymentMethod: 'paymentMethod0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  types: [
    'types3'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

