
# Get Account Holder Request

## Structure

`GetAccountHolderRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string \| undefined` | Optional | The code of the account of which to retrieve the details.<br><br>> Required if no `accountHolderCode` is provided. |
| `accountHolderCode` | `string \| undefined` | Optional | The code of the account holder of which to retrieve the details.<br><br>> Required if no `accountCode` is provided. |
| `showDetails` | `boolean \| undefined` | Optional | True if the request should return the account holder details |

## Example

```ts
import { GetAccountHolderRequest } from 'adyen';

const getAccountHolderRequest: GetAccountHolderRequest = {
  accountCode: 'accountCode2',
  accountHolderCode: 'accountHolderCode6',
  showDetails: false,
};
```

