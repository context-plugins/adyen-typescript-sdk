
# Duration

*This model accepts additional fields of type unknown.*

## Structure

`Duration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `unit` | [`Unit \| undefined`](../../doc/models/unit.md) | Optional | - |
| `value` | `number \| undefined` | Optional | The length of time by the unit. For example, 5 days.<br><br>The maximum duration is 90 days or an equivalent in other units. For example, 3 months. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { Duration, Unit } from 'adyen';

const duration: Duration = {
  unit: Unit.Weeks,
  value: 176,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

