
# Same Counterparty Restriction

*This model accepts additional fields of type unknown.*

## Structure

`SameCounterpartyRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `boolean \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SameCounterpartyRestriction } from 'adyen';

const sameCounterpartyRestriction: SameCounterpartyRestriction = {
  operation: 'operation6',
  value: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

