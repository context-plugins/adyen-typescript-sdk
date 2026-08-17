
# Wifi Profiles

## Structure

`WifiProfiles`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `profiles` | [`Profile[] \| undefined`](../../doc/models/profile.md) | Optional | List of remote Wi-Fi profiles. |
| `settings` | [`Settings1 \| undefined`](../../doc/models/settings-1.md) | Optional | General Wi-Fi settings. |

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
    }
  ],
  settings: {
    band: 'band0',
    roaming: false,
    timeout: 124,
  },
};
```

