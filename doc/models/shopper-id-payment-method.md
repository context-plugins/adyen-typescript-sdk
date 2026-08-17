
# Shopper Id Payment Method

## Structure

`ShopperIdPaymentMethod`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | `string \| undefined` | Optional | - |

## Example

```ts
import { UPIPaymentMethod } from 'adyen';

const shopperIdPaymentMethod: UPIPaymentMethod = {
  virtualPaymentAddress: 'virtualPaymentAddress4',
  type: 'upi_collect',
};
```

