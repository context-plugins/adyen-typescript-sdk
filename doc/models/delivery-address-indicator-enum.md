
# Delivery Address Indicator Enum

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

`DeliveryAddressIndicatorEnum`

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
import { DeliveryAddressIndicatorEnum } from 'adyen';

const deliveryAddressIndicator = DeliveryAddressIndicatorEnum.GoodsNotShipped;
```

