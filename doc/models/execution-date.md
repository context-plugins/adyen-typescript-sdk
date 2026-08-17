
# Execution Date

## Structure

`ExecutionDate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string \| undefined` | Optional | The date when the transfer will be processed. This date must be:<br><br>* Within 30 days of the current date.<br>* In the [ISO 8601 format](https://www.iso.org/iso-8601-date-and-time-format.html) **YYYY-MM-DD**. For example: 2025-01-31 |
| `timezone` | `string \| undefined` | Optional | The timezone that applies to the execution date. Use a timezone identifier from the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).<br><br>Example: **America/Los_Angeles**.<br>Default value: **Europe/Amsterdam**. |

## Example

```ts
import { ExecutionDate } from 'adyen';

const executionDate: ExecutionDate = {
  date: '2016-03-13T12:52:32.123Z',
  timezone: 'timezone0',
};
```

