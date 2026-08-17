
# Disbursement Repayment

## Structure

`DisbursementRepayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `basisPoints` | `number` | Required | The percentage of your user's incoming net volume that is deducted for repaying the grant. The percentage expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).<br><br>**Constraints**: `>= 0`, `<= 10000` |
| `updateDescription` | `string` | Required | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `240` |

## Example

```ts
import { DisbursementRepayment } from 'adyen';

const disbursementRepayment: DisbursementRepayment = {
  basisPoints: 28,
  updateDescription: 'updateDescription2',
};
```

