
# Delete Shareholder Request

*This model accepts additional fields of type unknown.*

## Structure

`DeleteShareholderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the Account Holder from which to delete the Shareholders. |
| `shareholderCodes` | `string[]` | Required | The code(s) of the Shareholders to be deleted. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeleteShareholderRequest } from 'adyenlib';

const deleteShareholderRequest: DeleteShareholderRequest = {
  accountHolderCode: 'accountHolderCode4',
  shareholderCodes: [
    'shareholderCodes5',
    'shareholderCodes6'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

