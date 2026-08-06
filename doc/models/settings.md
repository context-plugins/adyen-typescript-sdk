
# Settings

*This model accepts additional fields of type unknown.*

## Structure

`Settings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `band` | `string \| undefined` | Optional | The preferred Wi-Fi band, for use if the terminals support multiple bands. Possible values: All, 2.4GHz, 5GHz. |
| `roaming` | `boolean \| undefined` | Optional | Indicates whether roaming is enabled on the terminals. |
| `timeout` | `number \| undefined` | Optional | The connection time-out in seconds. Minimum value: 0. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Settings } from 'adyen';

const settings: Settings = {
  band: 'band0',
  roaming: false,
  timeout: 124,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

