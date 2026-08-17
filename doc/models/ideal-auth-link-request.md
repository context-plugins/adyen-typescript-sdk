
# Ideal Auth Link Request

## Structure

`IdealAuthLinkRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Required | The unique identifier of the account holder.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `150` |

## Example

```ts
import { IdealAuthLinkRequest } from 'adyen';

const idealAuthLinkRequest: IdealAuthLinkRequest = {
  accountHolderId: 'AH00000000000000000000000',
};
```

