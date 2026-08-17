
# Validate Shopper Id Request

## Structure

`ValidateShopperIdRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `1000` |
| `paymentMethod` | [`ShopperIdPaymentMethod1`](../../doc/models/shopper-id-payment-method-1.md) | Required | paymentMethod |
| `shopperEmail` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `0`, *Maximum Length*: `300` |
| `shopperIP` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `0`, *Maximum Length*: `15` |
| `shopperReference` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `0`, *Maximum Length*: `256` |

## Example

```ts
import { ValidateShopperIdRequest } from 'adyen';

const validateShopperIdRequest: ValidateShopperIdRequest = {
  merchantAccount: 'merchantAccount0',
  paymentMethod: {
    type: 'ShopperIdPaymentMethod1',
  },
  shopperEmail: 'shopperEmail8',
  shopperIP: 'shopperIP6',
  shopperReference: 'shopperReference6',
};
```

