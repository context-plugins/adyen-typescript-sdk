
# Payment Validations

*This model accepts additional fields of type unknown.*

## Structure

`PaymentValidations`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`Name6 \| undefined`](../../doc/models/name-6.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentValidations } from 'adyenlib';

const paymentValidations: PaymentValidations = {
  name: {
    status: 'status2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

