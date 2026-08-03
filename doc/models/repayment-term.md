
# Repayment Term

Contains information about the time period in which your user must repay the total amount of the grant.

*This model accepts additional fields of type unknown.*

## Structure

`RepaymentTerm`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `estimatedDays` | `number` | Required | The estimated term for repaying the grant, in days. |
| `maximumDays` | `number \| undefined` | Optional | The maximum term for repaying the grant, in days. Only applies when `contractType` is **loan**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RepaymentTerm } from 'adyenlib';

const repaymentTerm: RepaymentTerm = {
  estimatedDays: 34,
  maximumDays: 66,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

