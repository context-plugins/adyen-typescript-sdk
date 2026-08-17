
# Android App

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
| `status` | [`Status7Enum`](../../doc/models/status-7-enum.md) | Required | The status of the app. Possible values:<br><br>* `processing`: the app is being signed and converted to a format that the terminal can handle.<br>* `error`: something went wrong. Check that the app matches the [requirements](https://docs.adyen.com/point-of-sale/android-terminals/app-requirements).<br>* `invalid`: there is something wrong with the APK file of the app.<br>* `ready`: the app has been signed and converted.<br>* `archived`: the app is no longer available. |
| `versionCode` | `number \| undefined` | Optional | The version number of the app. |
| `versionName` | `string \| undefined` | Optional | The app version number that is shown on the terminal. |

## Example

```ts
import { AndroidApp, Status7Enum } from 'adyen';

const androidApp: AndroidApp = {
  id: 'id2',
  status: Status7Enum.Ready,
  description: 'description2',
  errorCode: 'errorCode8',
  errors: [
    {
      errorCode: 'errorCode6',
      terminalModels: [
        'terminalModels3',
        'terminalModels4'
      ],
    },
    {
      errorCode: 'errorCode6',
      terminalModels: [
        'terminalModels3',
        'terminalModels4'
      ],
    }
  ],
  label: 'label2',
  packageName: 'packageName8',
};
```

