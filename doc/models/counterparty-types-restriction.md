
# Counterparty Types Restriction

## Structure

`CounterpartyTypesRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`ValueEnum[] \| undefined`](../../doc/models/value-enum.md) | Optional | The list of counterparty types to be evaluated. |

## Example

```ts
import { CounterpartyTypesRestriction, ValueEnum } from 'adyen';

const counterpartyTypesRestriction: CounterpartyTypesRestriction = {
  operation: 'operation4',
  value: [
    ValueEnum.Card
  ],
};
```

