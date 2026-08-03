
# Update Split Configuration Request

*This model accepts additional fields of type unknown.*

## Structure

`UpdateSplitConfigurationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string` | Required | Your description for the split configuration.<br><br>**Constraints**: *Maximum Length*: `300` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { UpdateSplitConfigurationRequest } from 'adyenlib';

const updateSplitConfigurationRequest: UpdateSplitConfigurationRequest = {
  description: 'description8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

