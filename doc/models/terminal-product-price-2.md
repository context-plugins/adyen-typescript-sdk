
# Terminal Product Price 2

The price of the product.

*This model accepts additional fields of type unknown.*

## Structure

`TerminalProductPrice2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). |
| `value` | `number \| undefined` | Optional | The price of the item. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TerminalProductPrice2 } from 'adyenlib';

const terminalProductPrice2: TerminalProductPrice2 = {
  currency: 'currency6',
  value: 57.26,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

