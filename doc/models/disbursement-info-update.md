
# Disbursement Info Update

## Structure

`DisbursementInfoUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `repayment` | [`DisbursementRepaymentInfoUpdate2 \| undefined`](../../doc/models/disbursement-repayment-info-update-2.md) | Optional | Contains information about the basis points configured for repaying the disbursement. |

## Example

```ts
import { DisbursementInfoUpdate } from 'adyen';

const disbursementInfoUpdate: DisbursementInfoUpdate = {
  repayment: {
    basisPoints: 18,
    updateDescription: 'updateDescription0',
  },
};
```

