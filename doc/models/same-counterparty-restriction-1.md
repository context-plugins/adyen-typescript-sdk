
# Same Counterparty Restriction 1

Checks if a user has recently made multiple transfers to the same counterparty.

To use this restriction, you must:

- Set the rule `type` to **velocity**.

- Specify a time `interval`.

- Specify a number of `matchingTransactions`.

Supported operations: **equals**.

*This model accepts additional fields of type unknown.*

## Structure

`SameCounterpartyRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `boolean \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SameCounterpartyRestriction1 } from 'adyen';

const sameCounterpartyRestriction1: SameCounterpartyRestriction1 = {
  operation: 'operation6',
  value: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

