
# Display Response

It conveys the result of the display, parallel to the message request, except if response not required and absent.
Content of the Display Response message.

*This model accepts additional fields of type unknown.*

## Structure

`DisplayResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `outputResult` | [`OutputResult[]`](../../doc/models/output-result.md) | Required | Information related to the result the output (display, print, input).<br>One per DisplayOutput item of the request, and in the same order. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  Device3,
  DisplayResponse,
  ErrorCondition1,
  InfoQualify3,
  Result11,
} from 'adyenlib';

const displayResponse: DisplayResponse = {
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

