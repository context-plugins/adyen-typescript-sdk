
# Home Screen Settings

*This model accepts additional fields of type unknown.*

## Structure

`HomeScreenSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hideNavigationBar` | `boolean \| undefined` | Optional | Hide/show the navigation bar. |
| `showPaymentsMenu` | `boolean \| undefined` | Optional | Show/hide the payments menu. |
| `showSettingsMenu` | `boolean \| undefined` | Optional | Show/hide the settings menu. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { HomeScreenSettings } from 'adyen';

const homeScreenSettings: HomeScreenSettings = {
  hideNavigationBar: false,
  showPaymentsMenu: false,
  showSettingsMenu: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

