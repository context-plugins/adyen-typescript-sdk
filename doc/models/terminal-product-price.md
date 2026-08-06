
# Terminal Product Price

*This model accepts additional fields of type unknown.*

## Structure

`TerminalProductPrice`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). |
| `value` | `number \| undefined` | Optional | The price of the item. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TerminalProductPrice } from 'adyen';

const terminalProductPrice: TerminalProductPrice = {
  currency: 'currency4',
  value: 26.68,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

