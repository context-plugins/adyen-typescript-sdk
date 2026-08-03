
# Same Amount Restriction 1

Checks if a user has recently sent the same amount of funds in multiple transfers.

To use this restriction, you must:

- Set the rule `type` to **velocity**.

- Specify a time `interval`.

- Specify a number of `matchingTransactions`.

Supported operation: **equals**.

*This model accepts additional fields of type unknown.*

## Structure

`SameAmountRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `boolean \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SameAmountRestriction1 } from 'adyenlib';

const sameAmountRestriction1: SameAmountRestriction1 = {
  operation: 'operation6',
  value: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

