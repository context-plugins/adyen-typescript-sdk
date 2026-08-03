
# Settings 1

General Wi-Fi settings.

*This model accepts additional fields of type unknown.*

## Structure

`Settings1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `band` | `string \| undefined` | Optional | The preferred Wi-Fi band, for use if the terminals support multiple bands. Possible values: All, 2.4GHz, 5GHz. |
| `roaming` | `boolean \| undefined` | Optional | Indicates whether roaming is enabled on the terminals. |
| `timeout` | `number \| undefined` | Optional | The connection time-out in seconds. Minimum value: 0. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Settings1 } from 'adyenlib';

const settings1: Settings1 = {
  band: 'band0',
  roaming: false,
  timeout: 92,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

