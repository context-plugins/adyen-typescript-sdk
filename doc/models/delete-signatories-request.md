
# Delete Signatories Request

## Structure

`DeleteSignatoriesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the account holder from which to delete the signatories. |
| `signatoryCodes` | `string[]` | Required | Array of codes of the signatories to be deleted. |

## Example

```ts
import { DeleteSignatoriesRequest } from 'adyen';

const deleteSignatoriesRequest: DeleteSignatoriesRequest = {
  accountHolderCode: 'accountHolderCode2',
  signatoryCodes: [
    'signatoryCodes3'
  ],
};
```

