
# Dynamic Offer Repayment 2

Contains information about the repayment configuration of the grant.

*This model accepts additional fields of type unknown.*

## Structure

`DynamicOfferRepayment2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `term` | [`Term`](../../doc/models/term.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DynamicOfferRepayment2 } from 'adyenlib';

const dynamicOfferRepayment2: DynamicOfferRepayment2 = {
  term: {
    estimatedDays: 248,
    maximumDays: 24,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

