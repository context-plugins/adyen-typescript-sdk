
# Amounts Resp

*This model accepts additional fields of type unknown.*

## Structure

`AmountsResp`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string \| undefined` | Optional | Currency of a monetary amount.<br><br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |
| `authorizedAmount` | `number` | Required | Amount requested by the Sale for the payment.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `totalRebatesAmount` | `number \| undefined` | Optional | Sum of rebates in amount (total amount or line item amount) for all the loyalty programs.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `totalFeesAmount` | `number \| undefined` | Optional | Total amount of financial fees.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `cashBackAmount` | `number \| undefined` | Optional | The cash-back part of the amount requested by the Sale for the payment.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `tipAmount` | `number \| undefined` | Optional | Amount paid for a tip. Allow the printing of the tip on the receipt, and to qualify the tip part of the amount.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AmountsResp } from 'adyenlib';

const amountsResp: AmountsResp = {
  authorizedAmount: 166.9,
  currency: 'Currency2',
  totalRebatesAmount: 86.42,
  totalFeesAmount: 147.46,
  cashBackAmount: 240.2,
  tipAmount: 53.34,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

