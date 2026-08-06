
# Terminal Product

*This model accepts additional fields of type unknown.*

## Structure

`TerminalProduct`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Information about items included and integration options. |
| `id` | `string \| undefined` | Optional | The unique identifier of the product. |
| `itemsIncluded` | `string[] \| undefined` | Optional | A list of parts included in the terminal package. |
| `name` | `string \| undefined` | Optional | The descriptive name of the product. |
| `price` | [`TerminalProductPrice \| undefined`](../../doc/models/terminal-product-price.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TerminalProduct } from 'adyen';

const terminalProduct: TerminalProduct = {
  description: 'description0',
  id: 'id0',
  itemsIncluded: [
    'itemsIncluded3'
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
};
```

