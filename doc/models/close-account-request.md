
# Close Account Request

## Structure

`CloseAccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string` | Required | The code of account to be closed. |

## Example

```ts
import { CloseAccountRequest } from 'adyen';

const closeAccountRequest: CloseAccountRequest = {
  accountCode: 'accountCode6',
};
```

