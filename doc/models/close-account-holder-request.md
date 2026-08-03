
# Close Account Holder Request

*This model accepts additional fields of type unknown.*

## Structure

`CloseAccountHolderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the Account Holder to be closed. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CloseAccountHolderRequest } from 'adyenlib';

const closeAccountHolderRequest: CloseAccountHolderRequest = {
  accountHolderCode: 'accountHolderCode6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

