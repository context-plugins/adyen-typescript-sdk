
# Kiosk Mode Settings

## Structure

`KioskModeSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowedAppsInKioskMode` | `string[] \| undefined` | Optional | List of package names for apps allowed to run in kiosk mode. |
| `kioskAppOnStartup` | `string \| undefined` | Optional | The package name of the app to launch on startup. This must be one of the apps included in `allowedAppsInKioskMode`. |

## Example

```ts
import { KioskModeSettings } from 'adyen';

const kioskModeSettings: KioskModeSettings = {
  allowedAppsInKioskMode: [
    'allowedAppsInKioskMode8',
    'allowedAppsInKioskMode9'
  ],
  kioskAppOnStartup: 'kioskAppOnStartup6',
};
```

