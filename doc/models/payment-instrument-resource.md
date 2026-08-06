
# Payment Instrument Resource

*This model accepts additional fields of type unknown.*

## Structure

`PaymentInstrumentResource`

## Inherits From

[`Resource`](../../doc/models/resource.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentInstrumentId` | `string` | Required | **Constraints**: *Minimum Length*: `1` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaymentInstrumentResource } from 'adyen';

const paymentInstrumentResource: PaymentInstrumentResource = {
  paymentInstrumentId: 'paymentInstrumentId4',
  type: 'paymentInstrument',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

