
# Counterparty Types Restriction 1

Contains a list of counterparty types and how they must be evaluated.

Supported operations: **anyMatch**, **noneMatch**.

Supported value inputs:

- **balanceAccount**
- **bankAccount**
- **card**
- **transferInstrument**

## Structure

`CounterpartyTypesRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | [`ValueEnum[] \| undefined`](../../doc/models/value-enum.md) | Optional | The list of counterparty types to be evaluated. |

## Example

```ts
import { CounterpartyTypesRestriction1, ValueEnum } from 'adyen';

const counterpartyTypesRestriction1: CounterpartyTypesRestriction1 = {
  operation: 'operation4',
  value: [
    ValueEnum.Card
  ],
};
```

