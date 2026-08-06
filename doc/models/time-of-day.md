
# Time of Day

*This model accepts additional fields of type unknown.*

## Structure

`TimeOfDay`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `endTime` | `string \| undefined` | Optional | The end time in a time-only ISO-8601 extended offset format. For example: **08:00:00+02:00**, **22:30:00-03:00**. |
| `startTime` | `string \| undefined` | Optional | The start time in a time-only ISO-8601 extended offset format. For example: **08:00:00+02:00**, **22:30:00-03:00**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { TimeOfDay } from 'adyen';

const timeOfDay: TimeOfDay = {
  endTime: 'endTime2',
  startTime: 'startTime0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

