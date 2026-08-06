
# Balance Platform

*This model accepts additional fields of type unknown.*

## Structure

`BalancePlatform`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Optional | Your description of the balance platform.<br><br>**Constraints**: *Maximum Length*: `300` |
| `id` | `string` | Required | The unique identifier of the balance platform. |
| `status` | `string \| undefined` | Optional | The status of the balance platform.<br><br>Possible values: **Active**, **Inactive**, **Closed**, **Suspended**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { BalancePlatform } from 'adyen';

const balancePlatform: BalancePlatform = {
  id: 'id2',
  description: 'description2',
  status: 'status4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

