
# Get Uploaded Documents Request

*This model accepts additional fields of type unknown.*

## Structure

`GetUploadedDocumentsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the Account Holder for which to retrieve the documents. |
| `bankAccountUuid` | `string \| undefined` | Optional | The code of the Bank Account for which to retrieve the documents. |
| `shareholderCode` | `string \| undefined` | Optional | The code of the Shareholder for which to retrieve the documents. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetUploadedDocumentsRequest } from 'adyenlib';

const getUploadedDocumentsRequest: GetUploadedDocumentsRequest = {
  accountHolderCode: 'accountHolderCode0',
  bankAccountUuid: 'bankAccountUUID0',
  shareholderCode: 'shareholderCode2',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

