
# Session Result Response

*This model accepts additional fields of type unknown.*

## Structure

`SessionResultResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `additionalData` | `Record<string, string> \| undefined` | Optional | Contains additional information about the payment. Some fields are included only if you enable them. To enable these fields in your Customer Area, go to **Developers** > **Additional data**. |
| `id` | `string \| undefined` | Optional | A unique identifier of the session. |
| `payments` | [`Payment[] \| undefined`](../../doc/models/payment.md) | Optional | A list of all authorised payments done for this session. |
| `reference` | `string \| undefined` | Optional | The unique reference that you provided in the original `/sessions` request. This identifies the payment and is used in all communication with you about the payment status. |
| `status` | [`Status52 \| undefined`](../../doc/models/status-52.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ResultCode2, SessionResultResponse, Status52 } from 'adyenlib';

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
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      paymentMethod: {
        brand: 'brand6',
        type: 'type8',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      pspReference: 'pspReference6',
      resultCode: ResultCode2.Pending,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  reference: 'reference0',
  status: Status52.Active,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

