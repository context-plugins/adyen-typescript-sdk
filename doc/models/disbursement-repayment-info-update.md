
# Disbursement Repayment Info Update

*This model accepts additional fields of type unknown.*

## Structure

`DisbursementRepaymentInfoUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `basisPoints` | `number \| undefined` | Optional | The percentage of your user's incoming net volume that is deducted for repaying the grant. The percentage expressed in [basis points](https://www.investopedia.com/terms/b/basispoint.asp).<br><br>**Constraints**: `>= 0`, `<= 10000` |
| `updateDescription` | `string \| undefined` | Optional | **Constraints**: *Minimum Length*: `0`, *Maximum Length*: `240` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DisbursementRepaymentInfoUpdate } from 'adyenlib';

const disbursementRepaymentInfoUpdate: DisbursementRepaymentInfoUpdate = {
  basisPoints: 234,
  updateDescription: 'updateDescription6',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

