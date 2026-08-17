
# Converted Amount 1

Amount after a currency conversion.

## Structure

`ConvertedAmount1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountValue` | `number` | Required | Value of an amount.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `currency` | `string` | Required | Currency of a monetary amount.<br><br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |

## Example

```ts
import { ConvertedAmount1 } from 'adyen';

const convertedAmount1: ConvertedAmount1 = {
  amountValue: 13.36,
  currency: 'Currency4',
};
```

