
# Terminal Order

*This model accepts additional fields of type unknown.*

## Structure

`TerminalOrder`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `billingEntity` | [`BillingEntity \| undefined`](../../doc/models/billing-entity.md) | Optional | - |
| `customerOrderReference` | `string \| undefined` | Optional | The merchant-defined purchase order number. This will be printed on the packing list. |
| `id` | `string \| undefined` | Optional | The unique identifier of the order. |
| `items` | [`OrderItem[] \| undefined`](../../doc/models/order-item.md) | Optional | The products included in the order. |
| `orderDate` | `string \| undefined` | Optional | The date and time that the order was placed, in UTC ISO 8601 format. For example, "2011-12-03T10:15:30Z". |
| `shippingLocation` | [`ShippingLocation \| undefined`](../../doc/models/shipping-location.md) | Optional | - |
| `status` | `string \| undefined` | Optional | The processing status of the order. |
| `trackingUrl` | `string \| undefined` | Optional | The URL, provided by the carrier company, where the shipment can be tracked. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TerminalOrder } from 'adyenlib';

const terminalOrder: TerminalOrder = {
  billingEntity: {
    address: {
      city: 'city6',
      companyName: 'companyName8',
      country: 'country0',
      postalCode: 'postalCode8',
      stateOrProvince: 'stateOrProvince4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    email: 'email0',
    id: 'id6',
    name: 'name6',
    taxId: 'taxId2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  customerOrderReference: 'customerOrderReference0',
  id: 'id8',
  items: [
    {
      id: 'id8',
      installments: BigInt(204),
      name: 'name8',
      quantity: 22,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      id: 'id8',
      installments: BigInt(204),
      name: 'name8',
      quantity: 22,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  orderDate: 'orderDate2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

