
# Converted Amount 1

Amount after a currency conversion.

*This model accepts additional fields of type unknown.*

## Structure

`ConvertedAmount1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountValue` | `number` | Required | Value of an amount.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `currency` | `string` | Required | Currency of a monetary amount.<br><br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ConvertedAmount1 } from 'adyenlib';

const convertedAmount1: ConvertedAmount1 = {
  amountValue: 13.36,
  currency: 'Currency4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

