
# Delete Shareholder Request

## Structure

`DeleteShareholderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the Account Holder from which to delete the Shareholders. |
| `shareholderCodes` | `string[]` | Required | The code(s) of the Shareholders to be deleted. |

## Example

```ts
import { DeleteShareholderRequest } from 'adyen';

const deleteShareholderRequest: DeleteShareholderRequest = {
  accountHolderCode: 'accountHolderCode4',
  shareholderCodes: [
    'shareholderCodes5',
    'shareholderCodes6'
  ],
};
```

