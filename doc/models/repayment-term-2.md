
# Repayment Term 2

An object containing the details of the configuration for repayment term.

*This model accepts additional fields of type unknown.*

## Structure

`RepaymentTerm2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `estimatedDays` | `number` | Required | The estimated term for repaying the grant, in days. |
| `maximumDays` | `number \| undefined` | Optional | The maximum term for repaying the grant, in days. Only applies when `contractType` is **loan**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { RepaymentTerm2 } from 'adyenlib';

const repaymentTerm2: RepaymentTerm2 = {
  estimatedDays: 100,
  maximumDays: 132,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

