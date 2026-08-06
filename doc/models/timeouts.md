
# Timeouts

*This model accepts additional fields of type unknown.*

## Structure

`Timeouts`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fromActiveToSleep` | `number \| undefined` | Optional | Indicates the number of seconds of inactivity after which the terminal display goes into sleep mode. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Timeouts } from 'adyen';

const timeouts: Timeouts = {
  fromActiveToSleep: 94,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

