
# Validate Shopper Id Request

*This model accepts additional fields of type unknown.*

## Structure

`ValidateShopperIdRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `merchantAccount` | `string` | Required | The merchant account identifier, with which you want to process the transaction.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `1000` |
| `paymentMethod` | [`ShopperIdPaymentMethod1`](../../doc/models/shopper-id-payment-method-1.md) | Required | - |
| `shopperEmail` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `0`, *Maximum Length*: `300` |
| `shopperIp` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `0`, *Maximum Length*: `15` |
| `shopperReference` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `0`, *Maximum Length*: `256` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ValidateShopperIdRequest } from 'adyen';

const validateShopperIdRequest: ValidateShopperIdRequest = {
  merchantAccount: 'merchantAccount0',
  paymentMethod: {
    type: 'ShopperIdPaymentMethod1',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  shopperEmail: 'shopperEmail8',
  shopperIp: 'shopperIP6',
  shopperReference: 'shopperReference6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

