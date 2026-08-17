
# Display Response 2

Content of the Display Response message.

## Structure

`DisplayResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `outputResult` | [`OutputResult[]`](../../doc/models/output-result.md) | Required | Information related to the result the output (display, print, input).<br>One per DisplayOutput item of the request, and in the same order. |

## Example

```ts
import {
  Device3Enum,
  DisplayResponse2,
  ErrorCondition1Enum,
  InfoQualify3Enum,
  Result11Enum,
} from 'adyen';

const displayResponse2: DisplayResponse2 = {
  outputResult: [
    {
      device: Device3Enum.CashierInput,
      infoQualify: InfoQualify3Enum.Document,
      response: {
        result: Result11Enum.Partial,
        errorCondition: ErrorCondition1Enum.PaymentRestriction,
        additionalResponse: 'AdditionalResponse8',
      },
    }
  ],
};
```

