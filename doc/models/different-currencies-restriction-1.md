
# Different Currencies Restriction 1

Compares the currency of the payment against the currency of the payment instrument, and specifies the operation.

Supported operations: **equals**, **notEquals**.

*This model accepts additional fields of type unknown.*

## Structure

`DifferentCurrenciesRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `boolean \| undefined` | Optional | Checks the currency of the payment against the currency of the payment instrument.<br><br>Possible values:<br><br>- **true**: The currency of the payment is different from the currency of the payment instrument.<br><br>- **false**: The currencies are the same. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DifferentCurrenciesRestriction1 } from 'adyenlib';

const differentCurrenciesRestriction1: DifferentCurrenciesRestriction1 = {
  operation: 'operation8',
  value: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

