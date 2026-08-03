
# Payment Details Request

*This model accepts additional fields of type unknown.*

## Structure

`PaymentDetailsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `method` | `string \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentDetailsRequest } from 'adyenlib';

const paymentDetailsRequest: PaymentDetailsRequest = {
  method: 'PaymentDetailsRequest',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

