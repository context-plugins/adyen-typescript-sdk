
# Home Screen Settings 1

Settings for the home screen.

*This model accepts additional fields of type unknown.*

## Structure

`HomeScreenSettings1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hideNavigationBar` | `boolean \| undefined` | Optional | Hide/show the navigation bar. |
| `showPaymentsMenu` | `boolean \| undefined` | Optional | Show/hide the payments menu. |
| `showSettingsMenu` | `boolean \| undefined` | Optional | Show/hide the settings menu. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { HomeScreenSettings1 } from 'adyenlib';

const homeScreenSettings1: HomeScreenSettings1 = {
  hideNavigationBar: false,
  showPaymentsMenu: false,
  showSettingsMenu: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

