
# Terminal Products Response

*This model accepts additional fields of type unknown.*

## Structure

`TerminalProductsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`TerminalProduct[] \| undefined`](../../doc/models/terminal-product.md) | Optional | Terminal products that can be ordered. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TerminalProductsResponse } from 'adyen';

const terminalProductsResponse: TerminalProductsResponse = {
  data: [
    {
      description: 'description0',
      id: 'id0',
      itemsIncluded: [
        'itemsIncluded3',
        'itemsIncluded4',
        'itemsIncluded5'
      ],
      name: 'name0',
      price: {
        currency: 'currency2',
        value: 203.04,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      description: 'description0',
      id: 'id0',
      itemsIncluded: [
        'itemsIncluded3',
        'itemsIncluded4',
        'itemsIncluded5'
      ],
      name: 'name0',
      price: {
        currency: 'currency2',
        value: 203.04,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      description: 'description0',
      id: 'id0',
      itemsIncluded: [
        'itemsIncluded3',
        'itemsIncluded4',
        'itemsIncluded5'
      ],
      name: 'name0',
      price: {
        currency: 'currency2',
        value: 203.04,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
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

