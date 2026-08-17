
# Converted Amount

## Structure

`ConvertedAmount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountValue` | `number` | Required | Value of an amount.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `currency` | `string` | Required | Currency of a monetary amount.<br><br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |

## Example

```ts
import { ConvertedAmount } from 'adyen';

const convertedAmount: ConvertedAmount = {
  amountValue: 232.7,
  currency: 'Currency8',
};
```

