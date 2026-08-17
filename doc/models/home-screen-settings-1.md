
# Home Screen Settings 1

Settings for the home screen.

## Structure

`HomeScreenSettings1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hideNavigationBar` | `boolean \| undefined` | Optional | Hide/show the navigation bar. |
| `showPaymentsMenu` | `boolean \| undefined` | Optional | Show/hide the payments menu. |
| `showSettingsMenu` | `boolean \| undefined` | Optional | Show/hide the settings menu. |

## Example

```ts
import { HomeScreenSettings1 } from 'adyen';

const homeScreenSettings1: HomeScreenSettings1 = {
  hideNavigationBar: false,
  showPaymentsMenu: false,
  showSettingsMenu: false,
};
```

