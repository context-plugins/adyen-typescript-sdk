
# Token Requestors Restriction 1

List of token requestor IDs and the operation.

Supported operations: **anyMatch**, **noneMatch**.

*This model accepts additional fields of type unknown.*

## Structure

`TokenRequestorsRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `string[] \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TokenRequestorsRestriction1 } from 'adyenlib';

const tokenRequestorsRestriction1: TokenRequestorsRestriction1 = {
  operation: 'operation0',
  value: [
    'value4'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

