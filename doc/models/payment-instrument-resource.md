
# Payment Instrument Resource

## Structure

`PaymentInstrumentResource`

## Inherits From

[`Resource`](../../doc/models/resource.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `paymentInstrumentId` | `string` | Required | **Constraints**: *Minimum Length*: `1` |

## Example

```ts
import { PaymentInstrumentResource } from 'adyen';

const paymentInstrumentResource: PaymentInstrumentResource = {
  paymentInstrumentId: 'paymentInstrumentId4',
  type: 'paymentInstrument',
};
```

