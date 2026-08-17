
# Token Requestors Restriction

## Structure

`TokenRequestorsRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `string[] \| undefined` | Optional | - |

## Example

```ts
import { TokenRequestorsRestriction } from 'adyen';

const tokenRequestorsRestriction: TokenRequestorsRestriction = {
  operation: 'operation0',
  value: [
    'value4',
    'value5',
    'value6'
  ],
};
```

