
# Disbursement Repayment 2

Contains information about the basis points configured for repaying the disbursement.

## Structure

`DisbursementRepayment2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `basisPoints` | `number` | Required | The percentage of your user's incoming net volume that is deducted for repaying the grant. The percentage expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).<br><br>**Constraints**: `>= 0`, `<= 10000` |
| `updateDescription` | `string` | Required | **Constraints**: *Minimum Length*: `1`, *Maximum Length*: `240` |

## Example

```ts
import { DisbursementRepayment2 } from 'adyen';

const disbursementRepayment2: DisbursementRepayment2 = {
  basisPoints: 160,
  updateDescription: 'updateDescription4',
};
```

