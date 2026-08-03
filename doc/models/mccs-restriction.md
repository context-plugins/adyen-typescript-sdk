
# Mccs Restriction

*This model accepts additional fields of type unknown.*

## Structure

`MccsRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `string[] \| undefined` | Optional | List of merchant category codes (MCCs). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { MccsRestriction } from 'adyenlib';

const mccsRestriction: MccsRestriction = {
  operation: 'operation0',
  value: [
    'value4'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

