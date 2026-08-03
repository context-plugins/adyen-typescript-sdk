
# Android App Error

*This model accepts additional fields of type unknown.*

## Structure

`AndroidAppError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `string \| undefined` | Optional | The error code of the Android app with the `status` of either **error** or **invalid**. |
| `terminalModels` | `string[] \| undefined` | Optional | The list of payment terminal models to which the returned `errorCode` applies. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AndroidAppError } from 'adyenlib';

const androidAppError: AndroidAppError = {
  errorCode: 'errorCode0',
  terminalModels: [
    'terminalModels7',
    'terminalModels8',
    'terminalModels9'
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

