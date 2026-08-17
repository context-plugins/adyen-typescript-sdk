
# Terminal Product Price 2

The price of the product.

## Structure

`TerminalProductPrice2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). |
| `value` | `number \| undefined` | Optional | The price of the item. |

## Example

```ts
import { TerminalProductPrice2 } from 'adyen';

const terminalProductPrice2: TerminalProductPrice2 = {
  currency: 'currency6',
  value: 57.26,
};
```

