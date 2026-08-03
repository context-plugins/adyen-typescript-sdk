
# Duration 1

The duration, which you can specify in hours, days, weeks, or months. The maximum duration is 90 days or an equivalent in other units. Required when the `type` is **rolling** or **sliding**.

*This model accepts additional fields of type unknown.*

## Structure

`Duration1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `unit` | [`Unit \| undefined`](../../doc/models/unit.md) | Optional | - |
| `value` | `number \| undefined` | Optional | The length of time by the unit. For example, 5 days.<br><br>The maximum duration is 90 days or an equivalent in other units. For example, 3 months. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Duration1, Unit } from 'adyenlib';

const duration1: Duration1 = {
  unit: Unit.Weeks,
  value: 82,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

