
# Minor Units Monetary Value

## Structure

`MinorUnitsMonetaryValue`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amount` | `number \| undefined` | Optional | The transaction amount, in [minor units](https://docs.adyen.com/development-resources/currency-codes). |
| `currencyCode` | `string \| undefined` | Optional | The three-character [ISO currency code](https://docs.adyen.com/development-resources/currency-codes). |

## Example

```ts
import { MinorUnitsMonetaryValue } from 'adyen';

const minorUnitsMonetaryValue: MinorUnitsMonetaryValue = {
  amount: 186,
  currencyCode: 'currencyCode4',
};
```

