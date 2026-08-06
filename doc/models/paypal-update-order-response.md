
# Paypal Update Order Response

*This model accepts additional fields of type unknown.*

## Structure

`PaypalUpdateOrderResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentData` | `string` | Required | The updated paymentData. |
| `status` | [`Status42`](../../doc/models/status-42.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaypalUpdateOrderResponse, Status42 } from 'adyen';

const paypalUpdateOrderResponse: PaypalUpdateOrderResponse = {
  paymentData: 'paymentData0',
  status: Status42.Error,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

