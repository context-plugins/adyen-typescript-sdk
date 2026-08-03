
# Delete Signatories Request

*This model accepts additional fields of type unknown.*

## Structure

`DeleteSignatoriesRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the account holder from which to delete the signatories. |
| `signatoryCodes` | `string[]` | Required | Array of codes of the signatories to be deleted. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeleteSignatoriesRequest } from 'adyenlib';

const deleteSignatoriesRequest: DeleteSignatoriesRequest = {
  accountHolderCode: 'accountHolderCode2',
  signatoryCodes: [
    'signatoryCodes3'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

