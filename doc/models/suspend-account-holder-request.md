
# Suspend Account Holder Request

## Structure

`SuspendAccountHolderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the account holder to be suspended. |

## Example

```ts
import { SuspendAccountHolderRequest } from 'adyen';

const suspendAccountHolderRequest: SuspendAccountHolderRequest = {
  accountHolderCode: 'accountHolderCode0',
};
```

