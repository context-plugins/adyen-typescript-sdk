
# Disbursement Info Update

*This model accepts additional fields of type unknown.*

## Structure

`DisbursementInfoUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `repayment` | [`DisbursementRepaymentInfoUpdate \| undefined`](../../doc/models/disbursement-repayment-info-update.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DisbursementInfoUpdate } from 'adyen';

const disbursementInfoUpdate: DisbursementInfoUpdate = {
  repayment: {
    basisPoints: 18,
    updateDescription: 'updateDescription0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

