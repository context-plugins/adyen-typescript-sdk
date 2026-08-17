
# Un Suspend Account Holder Request

## Structure

`UnSuspendAccountHolderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the account holder to be reinstated. |

## Example

```ts
import { UnSuspendAccountHolderRequest } from 'adyen';

const unSuspendAccountHolderRequest: UnSuspendAccountHolderRequest = {
  accountHolderCode: 'accountHolderCode0',
};
```

