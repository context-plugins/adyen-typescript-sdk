
# Counterparty Types Restriction

*This model accepts additional fields of type unknown.*

## Structure

`CounterpartyTypesRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value[] \| undefined`](../../doc/models/value.md) | Optional | The list of counterparty types to be evaluated. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CounterpartyTypesRestriction, Value } from 'adyenlib';

const counterpartyTypesRestriction: CounterpartyTypesRestriction = {
  operation: 'operation4',
  value: [
    Value.Card
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

