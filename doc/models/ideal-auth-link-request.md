
# Ideal Auth Link Request

*This model accepts additional fields of type unknown.*

## Structure

`IdealAuthLinkRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Required | The unique identifier of the account holder.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `150` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IdealAuthLinkRequest } from 'adyenlib';

const idealAuthLinkRequest: IdealAuthLinkRequest = {
  accountHolderId: 'AH00000000000000000000000',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

