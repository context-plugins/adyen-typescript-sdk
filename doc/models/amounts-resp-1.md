
# Amounts Resp 1

Various amounts related to the payment response from the POI System. Amounts approved by the POI and the Acquirer for the payment and loyalty transaction, containing:

* The authorised amount to be paid.
* The amount of the rebates.
* The amount of financial fees.
* The cash back part of the requested amount for a payment with cash back.
* The tip part of the requested amount for a payment with tip.

## Structure

`AmountsResp1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currency` | `string \| undefined` | Optional | Currency of a monetary amount.<br><br>**Constraints**: *Pattern*: `^[A-Z]{3,3}$` |
| `authorizedAmount` | `number` | Required | Amount requested by the Sale for the payment.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `totalRebatesAmount` | `number \| undefined` | Optional | Sum of rebates in amount (total amount or line item amount) for all the loyalty programs.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `totalFeesAmount` | `number \| undefined` | Optional | Total amount of financial fees.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `cashBackAmount` | `number \| undefined` | Optional | The cash-back part of the amount requested by the Sale for the payment.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |
| `tipAmount` | `number \| undefined` | Optional | Amount paid for a tip. Allow the printing of the tip on the receipt, and to qualify the tip part of the amount.<br><br>**Constraints**: `>= 0`, `<= 99999999.999999` |

## Example

```ts
import { AmountsResp1 } from 'adyen';

const amountsResp1: AmountsResp1 = {
  authorizedAmount: 21.92,
  currency: 'Currency4',
  totalRebatesAmount: 231.4,
  totalFeesAmount: 36.44,
  cashBackAmount: 95.22,
  tipAmount: 57.68,
};
```

