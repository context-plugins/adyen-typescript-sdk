
# Kiosk Mode Settings 1

Settings for kiosk mode.

## Structure

`KioskModeSettings1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowedAppsInKioskMode` | `string[] \| undefined` | Optional | List of package names for apps allowed to run in kiosk mode. |
| `kioskAppOnStartup` | `string \| undefined` | Optional | The package name of the app to launch on startup. This must be one of the apps included in `allowedAppsInKioskMode`. |

## Example

```ts
import { KioskModeSettings1 } from 'adyen';

const kioskModeSettings1: KioskModeSettings1 = {
  allowedAppsInKioskMode: [
    'allowedAppsInKioskMode4',
    'allowedAppsInKioskMode5',
    'allowedAppsInKioskMode6'
  ],
  kioskAppOnStartup: 'kioskAppOnStartup0',
};
```

