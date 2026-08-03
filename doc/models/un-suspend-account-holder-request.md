
# Un Suspend Account Holder Request

*This model accepts additional fields of type unknown.*

## Structure

`UnSuspendAccountHolderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the account holder to be reinstated. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UnSuspendAccountHolderRequest } from 'adyenlib';

const unSuspendAccountHolderRequest: UnSuspendAccountHolderRequest = {
  accountHolderCode: 'accountHolderCode0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

