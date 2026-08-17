
# Refund Not Paid Out Transfers Request

## Structure

`RefundNotPaidOutTransfersRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCode` | `string` | Required | The code of the account from which to perform the refund(s). |
| `accountHolderCode` | `string` | Required | The code of the Account Holder which owns the account from which to perform the refund(s). |

## Example

```ts
import { RefundNotPaidOutTransfersRequest } from 'adyen';

const refundNotPaidOutTransfersRequest: RefundNotPaidOutTransfersRequest = {
  accountCode: 'accountCode4',
  accountHolderCode: 'accountHolderCode0',
};
```

