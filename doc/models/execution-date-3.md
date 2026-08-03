
# Execution Date 3

The date when the transfer will be processed. This date must be within 30 days of the current date.

Until the `executionDate`:

- The `status` of the transfer remains as **received**.
- The `reason` of the transfer remains as **pending**.

*This model accepts additional fields of type unknown.*

## Structure

`ExecutionDate3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `date` | `string \| undefined` | Optional | The date when the transfer will be processed. This date must be:<br><br>* Within 30 days of the current date.<br>* In the [ISO 8601 format](https://www.iso.org/iso-8601-date-and-time-format.html) **YYYY-MM-DD**. For example: 2025-01-31 |
| `timezone` | `string \| undefined` | Optional | The timezone that applies to the execution date. Use a timezone identifier from the [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).<br><br>Example: **America/Los_Angeles**.<br>Default value: **Europe/Amsterdam**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ExecutionDate3 } from 'adyenlib';

const executionDate3: ExecutionDate3 = {
  date: '2016-03-13T12:52:32.123Z',
  timezone: 'timezone0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

