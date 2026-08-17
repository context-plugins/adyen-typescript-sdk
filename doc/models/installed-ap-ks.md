
# Installed AP Ks

## Structure

`InstalledAPKs`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `confirmationDate` | `string \| undefined` | Optional | The date and time when the app was installed. |
| `packageName` | `string \| undefined` | Optional | The package name of the app. |
| `versionName` | `string \| undefined` | Optional | The version name of the app. |

## Example

```ts
import { InstalledAPKs } from 'adyen';

const installedAPKs: InstalledAPKs = {
  confirmationDate: '2016-03-13T12:52:32.123Z',
  packageName: 'packageName6',
  versionName: 'versionName6',
};
```

