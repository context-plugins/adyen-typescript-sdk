
# Input Response 2

Content of the Input Response message.

## Structure

`InputResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `outputResult` | [`OutputResult1 \| undefined`](../../doc/models/output-result-1.md) | Optional | Information related to the result the output (display, print, input).<br>If DisplayOutput present in the request. |
| `inputResult` | [`InputResult2`](../../doc/models/input-result-2.md) | Required | Contains the result and the content of the input. |

## Example

```ts
import {
  Device3Enum,
  Device4Enum,
  ErrorCondition1Enum,
  InfoQualify2Enum,
  InfoQualify3Enum,
  InputCommand1Enum,
  InputResponse2,
  Result11Enum,
} from 'adyen';

const inputResponse2: InputResponse2 = {
  inputResult: {
    device: Device4Enum.CashierDisplay,
    infoQualify: InfoQualify2Enum.Input,
    response: {
      result: Result11Enum.Partial,
      errorCondition: ErrorCondition1Enum.PaymentRestriction,
      additionalResponse: 'AdditionalResponse8',
    },
    input: {
      inputCommand: InputCommand1Enum.GetMenuEntry,
      confirmedFlag: false,
      functionKey: 134,
      textInput: 'TextInput4',
      digitInput: 152,
      password: 'Password0',
    },
  },
  outputResult: {
    device: Device3Enum.CashierInput,
    infoQualify: InfoQualify3Enum.Document,
    response: {
      result: Result11Enum.Partial,
      errorCondition: ErrorCondition1Enum.PaymentRestriction,
      additionalResponse: 'AdditionalResponse8',
    },
  },
};
```

