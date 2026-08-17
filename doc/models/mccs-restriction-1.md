
# Mccs Restriction 1

List of merchant category codes (MCCs) and the operation.

Supported operations: **anyMatch**, **noneMatch**.

## Structure

`MccsRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `string[] \| undefined` | Optional | List of merchant category codes (MCCs). |

## Example

```ts
import { MccsRestriction1 } from 'adyen';

const mccsRestriction1: MccsRestriction1 = {
  operation: 'operation8',
  value: [
    'value2'
  ],
};
```

