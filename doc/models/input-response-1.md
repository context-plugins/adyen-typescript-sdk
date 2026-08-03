
# Input Response 1

*This model accepts additional fields of type unknown.*

## Structure

`InputResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `outputResult` | [`OutputResult2 \| undefined`](../../doc/models/output-result-2.md) | Optional | - |
| `inputResult` | [`InputResult`](../../doc/models/input-result.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  Device3,
  Device4,
  ErrorCondition1,
  InfoQualify2,
  InfoQualify3,
  InputCommand1,
  InputResponse1,
  Result11,
} from 'adyenlib';

const inputResponse1: InputResponse1 = {
  inputResult: {
    device: Device4.CashierDisplay,
    infoQualify: InfoQualify2.Input,
    response: {
      result: Result11.Partial,
      errorCondition: ErrorCondition1.PaymentRestriction,
      additionalResponse: 'AdditionalResponse8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    input: {
      inputCommand: InputCommand1.GetMenuEntry,
      confirmedFlag: false,
      functionKey: 134,
      textInput: 'TextInput4',
      digitInput: 152,
      password: 'Password0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  outputResult: {
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
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

