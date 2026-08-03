
# Terminal Orders Response

*This model accepts additional fields of type unknown.*

## Structure

`TerminalOrdersResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`TerminalOrder[] \| undefined`](../../doc/models/terminal-order.md) | Optional | List of orders for payment terminal packages and parts. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TerminalOrdersResponse } from 'adyenlib';

const terminalOrdersResponse: TerminalOrdersResponse = {
  data: [
    {
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
      customerOrderReference: 'customerOrderReference2',
      id: 'id0',
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
      orderDate: 'orderDate0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
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
      customerOrderReference: 'customerOrderReference2',
      id: 'id0',
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
      orderDate: 'orderDate0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

