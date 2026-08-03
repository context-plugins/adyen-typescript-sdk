
# Payment Validations 2

The object that you can use to enable payment validations for a transaction.

*This model accepts additional fields of type unknown.*

## Structure

`PaymentValidations2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | [`Name6 \| undefined`](../../doc/models/name-6.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentValidations2 } from 'adyenlib';

const paymentValidations2: PaymentValidations2 = {
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

