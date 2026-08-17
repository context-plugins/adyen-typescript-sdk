
# Close Account Holder Request

## Structure

`CloseAccountHolderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the Account Holder to be closed. |

## Example

```ts
import { CloseAccountHolderRequest } from 'adyen';

const closeAccountHolderRequest: CloseAccountHolderRequest = {
  accountHolderCode: 'accountHolderCode6',
};
```

