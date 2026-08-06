
# Mccs Restriction 1

List of merchant category codes (MCCs) and the operation.

Supported operations: **anyMatch**, **noneMatch**.

*This model accepts additional fields of type unknown.*

## Structure

`MccsRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `string[] \| undefined` | Optional | List of merchant category codes (MCCs). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MccsRestriction1 } from 'adyen';

const mccsRestriction1: MccsRestriction1 = {
  operation: 'operation8',
  value: [
    'value2'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

