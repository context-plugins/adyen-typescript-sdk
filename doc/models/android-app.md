
# Android App

*This model accepts additional fields of type unknown.*

## Structure

`AndroidApp`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | The description that was provided when uploading the app. The description is not shown on the terminal. |
| `errorCode` | `string \| undefined` | Optional | The error code of the Android app with the `status` of either **error** or **invalid**. |
| `errors` | [`AndroidAppError[] \| undefined`](../../doc/models/android-app-error.md) | Optional | The list of errors of the Android app. |
| `id` | `string` | Required | The unique identifier of the app. |
| `label` | `string \| undefined` | Optional | The app name that is shown on the terminal. |
| `packageName` | `string \| undefined` | Optional | The package name that uniquely identifies the Android app. |
| `status` | [`Status15`](../../doc/models/status-15.md) | Required | - |
| `versionCode` | `number \| undefined` | Optional | The version number of the app. |
| `versionName` | `string \| undefined` | Optional | The app version number that is shown on the terminal. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AndroidApp, Status15 } from 'adyen';

const androidApp: AndroidApp = {
  id: 'id2',
  status: Status15.Ready,
  description: 'description2',
  errorCode: 'errorCode8',
  errors: [
    {
      errorCode: 'errorCode6',
      terminalModels: [
        'terminalModels3',
        'terminalModels4'
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    {
      errorCode: 'errorCode6',
      terminalModels: [
        'terminalModels3',
        'terminalModels4'
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  label: 'label2',
  packageName: 'packageName8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

