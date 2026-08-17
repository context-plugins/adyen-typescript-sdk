
# Disbursement Repayment Info Update 2

Contains information about the basis points configured for repaying the disbursement.

## Structure

`DisbursementRepaymentInfoUpdate2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `basisPoints` | `number \| undefined` | Optional | The percentage of your user's incoming net volume that is deducted for repaying the grant. The percentage expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).<br><br>**Constraints**: `>= 0`, `<= 10000` |
| `updateDescription` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `0`, *Maximum Length*: `240` |

## Example

```ts
import { DisbursementRepaymentInfoUpdate2 } from 'adyen';

const disbursementRepaymentInfoUpdate2: DisbursementRepaymentInfoUpdate2 = {
  basisPoints: 152,
  updateDescription: 'updateDescription8',
};
```

