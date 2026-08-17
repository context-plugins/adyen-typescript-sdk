
# Cancel Order Response

## Structure

`CancelOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `pspReference` | `string` | Required | A unique reference of the cancellation request. |
| `resultCode` | `string` | Required, Constant | The result of the cancellation request.<br><br>Possible values:<br><br>* **Received** – Indicates the cancellation has successfully been received by Adyen, and will be processed.<br><br>**Value**: `'Received'` |

## Example

```ts
import { CancelOrderResponse } from 'adyen';

const cancelOrderResponse: CancelOrderResponse = {
  pspReference: 'pspReference0',
  resultCode: 'Received',
};
```

