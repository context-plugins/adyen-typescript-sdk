
# Output Result 1

Information related to the result the output (display, print, input).
If DisplayOutput present in the request.

*This model accepts additional fields of type unknown.*

## Structure

`OutputResult1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `device` | [`Device3`](../../doc/models/device-3.md) | Required | - |
| `infoQualify` | [`InfoQualify3`](../../doc/models/info-qualify-3.md) | Required | - |
| `response` | [`Response3`](../../doc/models/response-3.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  Device3,
  ErrorCondition1,
  InfoQualify3,
  OutputResult1,
  Result11,
} from 'adyenlib';

const outputResult1: OutputResult1 = {
  device: Device3.CashierInput,
  infoQualify: InfoQualify3.Input,
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

