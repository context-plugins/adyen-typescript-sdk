
# Home Screen Settings

## Structure

`HomeScreenSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hideNavigationBar` | `boolean \| undefined` | Optional | Hide/show the navigation bar. |
| `showPaymentsMenu` | `boolean \| undefined` | Optional | Show/hide the payments menu. |
| `showSettingsMenu` | `boolean \| undefined` | Optional | Show/hide the settings menu. |

## Example

```ts
import { HomeScreenSettings } from 'adyen';

const homeScreenSettings: HomeScreenSettings = {
  hideNavigationBar: false,
  showPaymentsMenu: false,
  showSettingsMenu: false,
};
```

