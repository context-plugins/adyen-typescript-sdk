
# Android App Error

## Structure

`AndroidAppError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errorCode` | `string \| undefined` | Optional | The error code of the Android app with the `status` of either **error** or **invalid**. |
| `terminalModels` | `string[] \| undefined` | Optional | The list of payment terminal models to which the returned `errorCode` applies. |

## Example

```ts
import { AndroidAppError } from 'adyen';

const androidAppError: AndroidAppError = {
  errorCode: 'errorCode0',
  terminalModels: [
    'terminalModels7',
    'terminalModels8',
    'terminalModels9'
  ],
};
```

