
# Payment Response 8

*This model accepts additional fields of type unknown.*

## Structure

`PaymentResponse8`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brand` | `string \| undefined` | Optional | The card brand that the shopper used to pay. Only returned if `paymentMethod.type` is **scheme**. |
| `type` | `string \| undefined` | Optional | The `paymentMethod.type` value used in the request. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentResponse8 } from 'adyen';

const paymentResponse8: PaymentResponse8 = {
  brand: 'brand6',
  type: 'type8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

