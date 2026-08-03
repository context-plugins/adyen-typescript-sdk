
# Counterparty Types Restriction 1

Contains a list of counterparty types and how they must be evaluated.

Supported operations: **anyMatch**, **noneMatch**.

Supported value inputs:

- **balanceAccount**
- **bankAccount**
- **card**
- **transferInstrument**

*This model accepts additional fields of type unknown.*

## Structure

`CounterpartyTypesRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`Value[] \| undefined`](../../doc/models/value.md) | Optional | The list of counterparty types to be evaluated. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CounterpartyTypesRestriction1, Value } from 'adyenlib';

const counterpartyTypesRestriction1: CounterpartyTypesRestriction1 = {
  operation: 'operation4',
  value: [
    Value.Card
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

