
# Cancel Order Response

*This model accepts additional fields of type unknown.*

## Structure

`CancelOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pspReference` | `string` | Required | A unique reference of the cancellation request. |
| `resultCode` | [`ResultCode18`](../../doc/models/result-code-18.md) | Required | The result of the cancellation request.<br><br>Possible values:<br><br>* **Received** – Indicates the cancellation has successfully been received by Adyen, and will be processed. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CancelOrderResponse, ResultCode18 } from 'adyenlib';

const cancelOrderResponse: CancelOrderResponse = {
  pspReference: 'pspReference0',
  resultCode: ResultCode18.Received,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

