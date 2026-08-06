
# Test Webhook Request

*This model accepts additional fields of type unknown.*

## Structure

`TestWebhookRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `notification` | [`CustomNotification \| undefined`](../../doc/models/custom-notification.md) | Optional | - |
| `types` | `string[] \| undefined` | Optional | List of event codes for which to send test notifications. Only the webhook types below are supported.<br><br>Possible values if webhook `type`: **standard**:<br><br>* **AUTHORISATION**<br>* **CHARGEBACK_REVERSED**<br>* **ORDER_CLOSED**<br>* **ORDER_OPENED**<br>* **PAIDOUT_REVERSED**<br>* **PAYOUT_THIRDPARTY**<br>* **REFUNDED_REVERSED**<br>* **REFUND_WITH_DATA**<br>* **REPORT_AVAILABLE**<br>* **CUSTOM** - set your custom notification fields in the [`notification`](https://docs.adyen.com/api-explorer/#/ManagementService/v1/post/companies/{companyId}/webhooks/{webhookId}/test__reqParam_notification) object.<br><br>Possible values if webhook `type`: **banktransfer-notification**:<br><br>* **PENDING**<br><br>Possible values if webhook `type`: **report-notification**:<br><br>* **REPORT_AVAILABLE**<br><br>Possible values if webhook `type`: **ideal-notification**:<br><br>* **AUTHORISATION**<br><br>Possible values if webhook `type`: **pending-notification**:<br><br>* **PENDING** |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TestWebhookRequest } from 'adyen';

const testWebhookRequest: TestWebhookRequest = {
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
    'types9',
    'types0',
    'types1'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

