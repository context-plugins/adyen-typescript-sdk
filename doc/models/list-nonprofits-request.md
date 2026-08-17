
# List Nonprofits Request

## Structure

`ListNonprofitsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderIds` | `string[]` | Required | The unique identifiers of the account holders to be included in a donation campaign.<br><br>**Constraints**: *Minimum Items*: `1` |

## Example

```ts
import { ListNonprofitsRequest } from 'adyen';

const listNonprofitsRequest: ListNonprofitsRequest = {
  accountHolderIds: [
    'accountHolderIds7',
    'accountHolderIds8'
  ],
};
```

