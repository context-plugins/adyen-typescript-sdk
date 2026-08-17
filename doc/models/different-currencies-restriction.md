
# Different Currencies Restriction

## Structure

`DifferentCurrenciesRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `boolean \| undefined` | Optional | Checks the currency of the payment against the currency of the payment instrument.<br><br>Possible values:<br><br>- **true**: The currency of the payment is different from the currency of the payment instrument.<br><br>- **false**: The currencies are the same. |

## Example

```ts
import { DifferentCurrenciesRestriction } from 'adyen';

const differentCurrenciesRestriction: DifferentCurrenciesRestriction = {
  operation: 'operation0',
  value: false,
};
```

