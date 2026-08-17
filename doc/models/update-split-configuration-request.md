
# Update Split Configuration Request

## Structure

`UpdateSplitConfigurationRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string` | Required | Your description for the split configuration.<br><br>**Constraints**: *Maximum Length*: `300` |

## Example

```ts
import { UpdateSplitConfigurationRequest } from 'adyen';

const updateSplitConfigurationRequest: UpdateSplitConfigurationRequest = {
  description: 'description8',
};
```

