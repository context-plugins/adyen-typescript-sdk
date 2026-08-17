
# Mccs Restriction

## Structure

`MccsRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `string[] \| undefined` | Optional | List of merchant category codes (MCCs). |

## Example

```ts
import { MccsRestriction } from 'adyen';

const mccsRestriction: MccsRestriction = {
  operation: 'operation0',
  value: [
    'value4'
  ],
};
```

