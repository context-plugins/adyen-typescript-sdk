
# Token Requestors Restriction 1

List of token requestor IDs and the operation.

Supported operations: **anyMatch**, **noneMatch**.

## Structure

`TokenRequestorsRestriction1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `operation` | `string` | Required | Defines how the condition must be evaluated. |
| `value` | `string[] \| undefined` | Optional | - |

## Example

```ts
import { TokenRequestorsRestriction1 } from 'adyen';

const tokenRequestorsRestriction1: TokenRequestorsRestriction1 = {
  operation: 'operation0',
  value: [
    'value4'
  ],
};
```

