
# Session Result Response

## Structure

`SessionResultResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | Contains additional information about the payment. Some fields are included only if you enable them. To enable these fields in your Customer Area, go to **Developers** > **Additional data**. |
| `id` | `string \| undefined` | Optional | A unique identifier of the session. |
| `payments` | [`Payment[] \| undefined`](../../doc/models/payment.md) | Optional | A list of all authorised payments done for this session. |
| `reference` | `string \| undefined` | Optional | The unique reference that you provided in the original `/sessions` request. This identifies the payment and is used in all communication with you about the payment status. |
| `status` | [`Status5Enum \| undefined`](../../doc/models/status-5-enum.md) | Optional | The status of the session. The status included in the response doesn't get updated. Don't make the request again to check for payment status updates.<br><br>Possible values:<br><br>* **completed**: the shopper completed the payment, and the payment was authorized.<br>* **paymentPending**: the shopper is in the process of making the payment. This applies to payment methods with an asynchronous flow, like voucher payments where the shopper completes the payment in a physical shop.<br>* **refused**: the session has been refused, because of too many refused payment attempts. The shopper can no longer complete the payment with this session.<br>* **canceled**: the shopper canceled the payment.<br>* **expired**: the session expired. The shopper can no longer complete the payment with this session. By default, the session expires one hour after it is created. |

## Example

```ts
import { ResultCode2Enum, SessionResultResponse, Status5Enum } from 'adyen';

const sessionResultResponse: SessionResultResponse = {
  additionalData: {
    'key0': 'additionalData4',
    'key1': 'additionalData5'
  },
  id: 'id4',
  payments: [
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
      },
      paymentMethod: {
        brand: 'brand6',
        type: 'type8',
      },
      pspReference: 'pspReference6',
      resultCode: ResultCode2Enum.Pending,
    }
  ],
  reference: 'reference0',
  status: Status5Enum.Active,
};
```

