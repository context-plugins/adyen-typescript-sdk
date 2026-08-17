
# Paypal Update Order Request

## Structure

`PaypalUpdateOrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount44 \| undefined`](../../doc/models/amount-44.md) | Optional | The updated final payment amount. This amount is the item total plus the shipping costs of the selected `deliveryMethod`. |
| `deliveryAddress` | [`DeliveryAddress5 \| undefined`](../../doc/models/delivery-address-5.md) | Optional | The delivery address for this order. |
| `deliveryMethods` | [`DeliveryMethod[] \| undefined`](../../doc/models/delivery-method.md) | Optional | The list of new delivery methods and the cost of each. |
| `discountAmount` | [`Amount45 \| undefined`](../../doc/models/amount-45.md) | Optional | The discount amount for this order. |
| `paymentData` | `string \| undefined` | Optional | The `paymentData` from the client side. This value changes every time you make a `/paypal/updateOrder` request. |
| `pspReference` | `string \| undefined` | Optional | The original `pspReference` from the `/payments` response. |
| `sessionId` | `string \| undefined` | Optional | The original `sessionId` from the `/sessions` response. |
| `shippingAmount` | [`Amount46 \| undefined`](../../doc/models/amount-46.md) | Optional | The shipping amount for this order. |
| `taxTotal` | [`TaxTotal2 \| undefined`](../../doc/models/tax-total-2.md) | Optional | Total tax amount from the order. |

## Example

```ts
import { PaypalUpdateOrderRequest, Type21Enum } from 'adyen';

const paypalUpdateOrderRequest: PaypalUpdateOrderRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
  },
  deliveryAddress: {
    city: 'city4',
    country: 'country0',
    houseNumberOrName: 'houseNumberOrName4',
    postalCode: 'postalCode2',
    street: 'street6',
    firstName: 'firstName8',
    lastName: 'lastName0',
    stateOrProvince: 'stateOrProvince6',
  },
  deliveryMethods: [
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
      },
      description: 'description6',
      reference: 'reference2',
      selected: false,
      type: Type21Enum.Shipping,
    },
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
      },
      description: 'description6',
      reference: 'reference2',
      selected: false,
      type: Type21Enum.Shipping,
    }
  ],
  discountAmount: {
    currency: 'currency8',
    value: BigInt(168),
  },
  paymentData: 'paymentData2',
};
```

