
# UPI Payment Method

## Structure

`UPIPaymentMethod`

## Inherits From

[`ShopperIdPaymentMethod`](../../doc/models/shopper-id-payment-method.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `virtualPaymentAddress` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `256` |

## Example

```ts
import { UPIPaymentMethod } from 'adyen';

const uPIPaymentMethod: UPIPaymentMethod = {
  virtualPaymentAddress: 'virtualPaymentAddress6',
  type: 'upi_collect',
};
```

