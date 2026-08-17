
# Same Counterparty Restriction

## Structure

`SameCounterpartyRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `boolean \| undefined` | Optional | - |

## Example

```ts
import { SameCounterpartyRestriction } from 'adyen';

const sameCounterpartyRestriction: SameCounterpartyRestriction = {
  operation: 'operation6',
  value: false,
};
```

