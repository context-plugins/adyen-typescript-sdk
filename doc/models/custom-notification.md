
# Custom Notification

*This model accepts additional fields of type unknown.*

## Structure

`CustomNotification`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount16 \| undefined`](../../doc/models/amount-16.md) | Optional | - |
| `eventCode` | `string \| undefined` | Optional | The event that caused the notification to be sent.Currently supported values:<br><br>* **AUTHORISATION**<br>* **CANCELLATION**<br>* **REFUND**<br>* **CAPTURE**<br>* **REPORT_AVAILABLE**<br>* **CHARGEBACK**<br>* **REQUEST_FOR_INFORMATION**<br>* **NOTIFICATION_OF_CHARGEBACK**<br>* **NOTIFICATIONTEST**<br>* **ORDER_OPENED**<br>* **ORDER_CLOSED**<br>* **CHARGEBACK_REVERSED**<br>* **REFUNDED_REVERSED**<br>* **REFUND_WITH_DATA** |
| `eventDate` | `string \| undefined` | Optional | The time of the event. Format: [ISO 8601](http://www.w3.org/TR/NOTE-datetime), YYYY-MM-DDThh:mm:ssTZD. |
| `merchantReference` | `string \| undefined` | Optional | Your reference for the custom test notification. |
| `paymentMethod` | `string \| undefined` | Optional | The payment method for the payment that the notification is about. Possible values:<br><br>* **amex**<br>* **visa**<br>* **mc**<br>* **maestro**<br>* **bcmc**<br>* **paypal**<br>* **sms**<br>* **bankTransfer_NL**<br>* **bankTransfer_DE**<br>* **bankTransfer_BE**<br>* **ideal**<br>* **elv**<br>* **sepadirectdebit** |
| `reason` | `string \| undefined` | Optional | A description of what caused the notification. |
| `success` | `boolean \| undefined` | Optional | The outcome of the event which the notification is about. Set to either **true** or **false**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CustomNotification } from 'adyen';

const customNotification: CustomNotification = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  eventCode: 'eventCode8',
  eventDate: '2016-03-13T12:52:32.123Z',
  merchantReference: 'merchantReference2',
  paymentMethod: 'paymentMethod6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

