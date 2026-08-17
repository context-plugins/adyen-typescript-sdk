
# Same Amount Restriction

## Structure

`SameAmountRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `boolean \| undefined` | Optional | - |

## Example

```ts
import { SameAmountRestriction } from 'adyen';

const sameAmountRestriction: SameAmountRestriction = {
  operation: 'operation4',
  value: false,
};
```

