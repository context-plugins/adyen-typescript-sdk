
# Dynamic Offer Repayment

*This model accepts additional fields of type unknown.*

## Structure

`DynamicOfferRepayment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `term` | [`Term`](../../doc/models/term.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { DynamicOfferRepayment } from 'adyenlib';

const dynamicOfferRepayment: DynamicOfferRepayment = {
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

