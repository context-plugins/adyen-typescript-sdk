
# Release Update Details

*This model accepts additional fields of type unknown.*

## Structure

`ReleaseUpdateDetails`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `type` | [`Type62 \| undefined`](../../doc/models/type-62.md) | Optional | - |
| `updateAtFirstMaintenanceCall` | `boolean \| undefined` | Optional | Boolean flag that tells if the terminal should update at the first next maintenance call. If false, terminal will update on its configured reboot time. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ReleaseUpdateDetails, Type62 } from 'adyen';

const releaseUpdateDetails: ReleaseUpdateDetails = {
  type: Type62.ReleaseUpdate,
  updateAtFirstMaintenanceCall: false,
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

