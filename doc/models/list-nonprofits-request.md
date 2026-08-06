
# List Nonprofits Request

*This model accepts additional fields of type unknown.*

## Structure

`ListNonprofitsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderIds` | `string[]` | Required | The unique identifiers of the account holders to be included in a donation campaign.<br><br>**Constraints**: *Minimum Items*: `1` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ListNonprofitsRequest } from 'adyen';

const listNonprofitsRequest: ListNonprofitsRequest = {
  accountHolderIds: [
    'accountHolderIds7',
    'accountHolderIds8'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

