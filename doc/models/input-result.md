
# Input Result

*This model accepts additional fields of type unknown.*

## Structure

`InputResult`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `device` | [`Device4`](../../doc/models/device-4.md) | Required | - |
| `infoQualify` | [`InfoQualify2`](../../doc/models/info-qualify-2.md) | Required | - |
| `response` | [`Response3`](../../doc/models/response-3.md) | Required | - |
| `input` | [`Input \| undefined`](../../doc/models/input.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  Device4,
  ErrorCondition1,
  InfoQualify2,
  InputCommand1,
  InputResult,
  Result11,
} from 'adyen';

const inputResult: InputResult = {
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
};
```

