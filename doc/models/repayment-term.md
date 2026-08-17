
# Repayment Term

An object containing the details of the configuration for repayment term., Contains information about the time period in which your user must repay the total amount of the grant.

## Structure

`RepaymentTerm`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `estimatedDays` | `number` | Required | The estimated term for repaying the grant, in days. |
| `maximumDays` | `number \| undefined` | Optional | The maximum term for repaying the grant, in days. Only applies when `contractType` is **loan**. |

## Example

```ts
import { RepaymentTerm } from 'adyen';

const repaymentTerm: RepaymentTerm = {
  estimatedDays: 34,
  maximumDays: 66,
};
```

