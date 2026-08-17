
# Install Android App Details

## Structure

`InstallAndroidAppDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `appId` | `string \| undefined` | Optional | The unique identifier of the app to be installed. |
| `type` | [`Type32Enum \| undefined`](../../doc/models/type-32-enum.md) | Optional | Type of terminal action: Install an Android app.<br><br>**Default**: `Type32Enum.InstallAndroidApp` |

## Example

```ts
import { InstallAndroidAppDetails, Type32Enum } from 'adyen';

const installAndroidAppDetails: InstallAndroidAppDetails = {
  appId: 'appId8',
  type: Type32Enum.InstallAndroidApp,
};
```

