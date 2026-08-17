
# Delete Payout Method Request

## Structure

`DeletePayoutMethodRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the account holder, from which to delete the payout methods. |
| `payoutMethodCodes` | `string[]` | Required | The codes of the payout methods to be deleted. |

## Example

```ts
import { DeletePayoutMethodRequest } from 'adyen';

const deletePayoutMethodRequest: DeletePayoutMethodRequest = {
  accountHolderCode: 'accountHolderCode2',
  payoutMethodCodes: [
    'payoutMethodCodes2',
    'payoutMethodCodes3',
    'payoutMethodCodes4'
  ],
};
```

