
# Close Stores Request

*This model accepts additional fields of type unknown.*

## Structure

`CloseStoresRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the account holder. |
| `stores` | `string[]` | Required | List of stores to be closed. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { CloseStoresRequest } from 'adyenlib';

const closeStoresRequest: CloseStoresRequest = {
  accountHolderCode: 'accountHolderCode2',
  stores: [
    'stores3',
    'stores2',
    'stores1'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

