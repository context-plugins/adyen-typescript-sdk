
# Paypal Update Order Request

*This model accepts additional fields of type unknown.*

## Structure

`PaypalUpdateOrderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | [`Amount16 \| undefined`](../../doc/models/amount-16.md) | Optional | - |
| `deliveryAddress` | [`DeliveryAddress1 \| undefined`](../../doc/models/delivery-address-1.md) | Optional | - |
| `deliveryMethods` | [`DeliveryMethod[] \| undefined`](../../doc/models/delivery-method.md) | Optional | The list of new delivery methods and the cost of each. |
| `discountAmount` | [`DiscountAmount \| undefined`](../../doc/models/discount-amount.md) | Optional | - |
| `paymentData` | `string \| undefined` | Optional | The `paymentData` from the client side. This value changes every time you make a `/paypal/updateOrder` request. |
| `pspReference` | `string \| undefined` | Optional | The original `pspReference` from the `/payments` response. |
| `sessionId` | `string \| undefined` | Optional | The original `sessionId` from the `/sessions` response. |
| `shippingAmount` | [`ShippingAmount \| undefined`](../../doc/models/shipping-amount.md) | Optional | - |
| `taxTotal` | [`TaxTotal \| undefined`](../../doc/models/tax-total.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { PaypalUpdateOrderRequest, Type211 } from 'adyen';

const paypalUpdateOrderRequest: PaypalUpdateOrderRequest = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
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
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  deliveryMethods: [
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      description: 'description6',
      reference: 'reference2',
      selected: false,
      type: Type211.Shipping,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      amount: {
        currency: 'currency2',
        value: BigInt(110),
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      description: 'description6',
      reference: 'reference2',
      selected: false,
      type: Type211.Shipping,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  discountAmount: {
    currency: 'currency8',
    value: BigInt(168),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  paymentData: 'paymentData2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

