
# Local Time

*This model accepts additional fields of type unknown.*

## Structure

`LocalTime`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `hour` | `number \| undefined` | Optional | - |
| `minute` | `number \| undefined` | Optional | - |
| `nano` | `number \| undefined` | Optional | - |
| `second` | `number \| undefined` | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { LocalTime } from 'adyen';

const localTime: LocalTime = {
  hour: 74,
  minute: 76,
  nano: 100,
  second: 138,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

