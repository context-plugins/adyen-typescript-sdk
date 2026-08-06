
# Print Response 1

*This model accepts additional fields of type unknown.*

## Structure

`PrintResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `documentQualifier` | [`DocumentQualifier2`](../../doc/models/document-qualifier-2.md) | Required | - |
| `response` | [`Response3`](../../doc/models/response-3.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  DocumentQualifier2,
  ErrorCondition1,
  PrintResponse1,
  Result11,
} from 'adyen';

const printResponse1: PrintResponse1 = {
  documentQualifier: DocumentQualifier2.CustomerReceipt,
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

