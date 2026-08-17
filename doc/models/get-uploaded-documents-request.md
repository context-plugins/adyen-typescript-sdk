
# Get Uploaded Documents Request

## Structure

`GetUploadedDocumentsRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the Account Holder for which to retrieve the documents. |
| `bankAccountUUID` | `string \| undefined` | Optional | The code of the Bank Account for which to retrieve the documents. |
| `shareholderCode` | `string \| undefined` | Optional | The code of the Shareholder for which to retrieve the documents. |

## Example

```ts
import { GetUploadedDocumentsRequest } from 'adyen';

const getUploadedDocumentsRequest: GetUploadedDocumentsRequest = {
  accountHolderCode: 'accountHolderCode0',
  bankAccountUUID: 'bankAccountUUID0',
  shareholderCode: 'shareholderCode2',
};
```

