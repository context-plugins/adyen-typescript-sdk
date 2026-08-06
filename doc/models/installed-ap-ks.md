
# Installed Ap Ks

*This model accepts additional fields of type unknown.*

## Structure

`InstalledApKs`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `confirmationDate` | `string \| undefined` | Optional | The date and time when the app was installed. |
| `packageName` | `string \| undefined` | Optional | The package name of the app. |
| `versionName` | `string \| undefined` | Optional | The version name of the app. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { InstalledApKs } from 'adyen';

const installedApKs: InstalledApKs = {
  confirmationDate: '2016-03-13T12:52:32.123Z',
  packageName: 'packageName4',
  versionName: 'versionName4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

