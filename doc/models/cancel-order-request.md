
# Cancel Order Request

*This model accepts additional fields of type unknown.*

## Structure

`CancelOrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account identifier that orderData belongs to. |
| `order` | [`EncryptedOrderData`](../../doc/models/encrypted-order-data.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CancelOrderRequest } from 'adyenlib';

const cancelOrderRequest: CancelOrderRequest = {
  merchantAccount: 'merchantAccount4',
  order: {
    orderData: 'orderData8',
    pspReference: 'pspReference8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

