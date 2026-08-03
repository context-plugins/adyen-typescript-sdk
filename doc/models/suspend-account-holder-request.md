
# Suspend Account Holder Request

*This model accepts additional fields of type unknown.*

## Structure

`SuspendAccountHolderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the account holder to be suspended. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SuspendAccountHolderRequest } from 'adyenlib';

const suspendAccountHolderRequest: SuspendAccountHolderRequest = {
  accountHolderCode: 'accountHolderCode0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

