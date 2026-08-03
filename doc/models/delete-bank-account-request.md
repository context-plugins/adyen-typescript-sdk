
# Delete Bank Account Request

*This model accepts additional fields of type unknown.*

## Structure

`DeleteBankAccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the Account Holder from which to delete the Bank Account(s). |
| `bankAccountUuiDs` | `string[]` | Required | The code(s) of the Bank Accounts to be deleted. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DeleteBankAccountRequest } from 'adyenlib';

const deleteBankAccountRequest: DeleteBankAccountRequest = {
  accountHolderCode: 'accountHolderCode2',
  bankAccountUuiDs: [
    'bankAccountUUIDs1',
    'bankAccountUUIDs2'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

