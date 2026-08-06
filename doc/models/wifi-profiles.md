
# Wifi Profiles

*This model accepts additional fields of type unknown.*

## Structure

`WifiProfiles`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profiles` | [`Profile[] \| undefined`](../../doc/models/profile.md) | Optional | List of remote Wi-Fi profiles. |
| `settings` | [`Settings \| undefined`](../../doc/models/settings.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { WifiProfiles } from 'adyen';

const wifiProfiles: WifiProfiles = {
  profiles: [
    {
      authType: 'authType8',
      bssType: 'bssType4',
      ssid: 'ssid6',
      wsec: 'wsec4',
      autoWifi: false,
      channel: 198,
      defaultProfile: false,
      domainSuffix: 'domainSuffix2',
      eap: 'eap0',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  settings: {
    band: 'band0',
    roaming: false,
    timeout: 124,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

