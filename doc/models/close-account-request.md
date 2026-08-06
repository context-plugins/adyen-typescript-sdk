
# Close Account Request

*This model accepts additional fields of type unknown.*

## Structure

`CloseAccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string` | Required | The code of account to be closed. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CloseAccountRequest } from 'adyen';

const closeAccountRequest: CloseAccountRequest = {
  accountCode: 'accountCode6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

