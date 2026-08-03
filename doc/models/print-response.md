
# Print Response

It conveys the result of the print, parallel to the message request, except if response not required and absent.
Content of the Print Response message.

*This model accepts additional fields of type unknown.*

## Structure

`PrintResponse`

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
  PrintResponse,
  Result11,
} from 'adyenlib';

const printResponse: PrintResponse = {
  documentQualifier: DocumentQualifier2.SaleReceipt,
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

