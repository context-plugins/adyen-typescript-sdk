
# Delete Bank Account Request

## Structure

`DeleteBankAccountRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the Account Holder from which to delete the Bank Account(s). |
| `bankAccountUUIDs` | `string[]` | Required | The code(s) of the Bank Accounts to be deleted. |

## Example

```ts
import { DeleteBankAccountRequest } from 'adyen';

const deleteBankAccountRequest: DeleteBankAccountRequest = {
  accountHolderCode: 'accountHolderCode2',
  bankAccountUUIDs: [
    'bankAccountUUIDs1',
    'bankAccountUUIDs2'
  ],
};
```

