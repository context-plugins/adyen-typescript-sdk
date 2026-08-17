
# Settings 1

General Wi-Fi settings.

## Structure

`Settings1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `band` | `string \| undefined` | Optional | The preferred Wi-Fi band, for use if the terminals support multiple bands. Possible values: All, 2.4GHz, 5GHz. |
| `roaming` | `boolean \| undefined` | Optional | Indicates whether roaming is enabled on the terminals. |
| `timeout` | `number \| undefined` | Optional | The connection time-out in seconds. Minimum value: 0. |

## Example

```ts
import { Settings1 } from 'adyen';

const settings1: Settings1 = {
  band: 'band0',
  roaming: false,
  timeout: 92,
};
```

