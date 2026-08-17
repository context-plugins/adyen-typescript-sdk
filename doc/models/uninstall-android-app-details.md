
# Uninstall Android App Details

## Structure

`UninstallAndroidAppDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `appId` | `string \| undefined` | Optional | The unique identifier of the app to be uninstalled. |
| `type` | [`Type71Enum \| undefined`](../../doc/models/type-71-enum.md) | Optional | Type of terminal action: Uninstall an Android app.<br><br>**Default**: `Type71Enum.UninstallAndroidApp` |

## Example

```ts
import { Type71Enum, UninstallAndroidAppDetails } from 'adyen';

const uninstallAndroidAppDetails: UninstallAndroidAppDetails = {
  appId: 'appId0',
  type: Type71Enum.UninstallAndroidApp,
};
```

