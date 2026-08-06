
# Display Response 3

*This model accepts additional fields of type unknown.*

## Structure

`DisplayResponse3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `outputResult` | [`OutputResult[]`](../../doc/models/output-result.md) | Required | Information related to the result the output (display, print, input).<br>One per DisplayOutput item of the request, and in the same order. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  Device3,
  DisplayResponse3,
  ErrorCondition1,
  InfoQualify3,
  Result11,
} from 'adyen';

const displayResponse3: DisplayResponse3 = {
  outputResult: [
    {
      device: Device3.CashierInput,
      infoQualify: InfoQualify3.Document,
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
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

