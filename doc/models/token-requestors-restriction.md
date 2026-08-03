
# Token Requestors Restriction

*This model accepts additional fields of type unknown.*

## Structure

`TokenRequestorsRestriction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `string[] \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TokenRequestorsRestriction } from 'adyenlib';

const tokenRequestorsRestriction: TokenRequestorsRestriction = {
  operation: 'operation0',
  value: [
    'value4',
    'value5',
    'value6'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

