
# Enableservice Response 1

*This model accepts additional fields of type unknown.*

## Structure

`EnableserviceResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `response` | [`Response3`](../../doc/models/response-3.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { EnableserviceResponse1, ErrorCondition1, Result11 } from 'adyen';

const enableserviceResponse1: EnableserviceResponse1 = {
  response: {
    result: Result11.Partial,
    errorCondition: ErrorCondition1.PaymentRestriction,
    additionalResponse: 'AdditionalResponse8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

