
# Account Holder Resource

## Structure

`AccountHolderResource`

## Inherits From

[`Resource`](../../doc/models/resource.md)

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolderId` | `string` | Required | The unique identifier of the resource connected to the component. For [Platform Experience components](https://docs.adyen.com/platforms/build-user-dashboards), this is the account holder linked to the balance account shown in the component.<br><br>**Constraints**: *Minimum Length*: `1` |

## Example

```ts
import { AccountHolderResource } from 'adyen';

const accountHolderResource: AccountHolderResource = {
  accountHolderId: 'accountHolderId8',
  type: 'accountHolder',
};
```

