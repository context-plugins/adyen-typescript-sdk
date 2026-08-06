
# Delivery Address Indicator

Indicator regarding the delivery address.
Allowed values:

* `shipToBillingAddress`
* `shipToVerifiedAddress`
* `shipToNewAddress`
* `shipToStore`
* `digitalGoods`
* `goodsNotShipped`
* `other`

## Enumeration

`DeliveryAddressIndicator`

## Fields

| Name |
|  --- |
| `ShipToBillingAddress` |
| `ShipToVerifiedAddress` |
| `ShipToNewAddress` |
| `ShipToStore` |
| `DigitalGoods` |
| `GoodsNotShipped` |
| `Other` |

## Example

```ts
import { DeliveryAddressIndicator } from 'adyen';

const deliveryAddressIndicator = DeliveryAddressIndicator.GoodsNotShipped;
```

