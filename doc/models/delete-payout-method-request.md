
# Delete Payout Method Request

*This model accepts additional fields of type unknown.*

## Structure

`DeletePayoutMethodRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderCode` | `string` | Required | The code of the account holder, from which to delete the payout methods. |
| `payoutMethodCodes` | `string[]` | Required | The codes of the payout methods to be deleted. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

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
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

