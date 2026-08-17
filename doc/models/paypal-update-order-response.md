
# Paypal Update Order Response

## Structure

`PaypalUpdateOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentData` | `string` | Required | The updated paymentData. |
| `status` | [`Status4Enum`](../../doc/models/status-4-enum.md) | Required | The status of the request. This indicates whether the order was successfully updated with PayPal. |

## Example

```ts
import { PaypalUpdateOrderResponse, Status4Enum } from 'adyen';

const paypalUpdateOrderResponse: PaypalUpdateOrderResponse = {
  paymentData: 'paymentData0',
  status: Status4Enum.Error,
};
```

