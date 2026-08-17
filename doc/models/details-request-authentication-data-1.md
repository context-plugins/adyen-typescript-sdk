
# Details Request Authentication Data 1

Data for 3DS authentication.

## Structure

`DetailsRequestAuthenticationData1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `authenticationOnly` | `boolean \| undefined` | Optional | Required to trigger the [authentication-only flow](https://docs.adyen.com/online-payments/3d-secure/authentication-only/). If set to **true**, you will only perform the 3D Secure 2 authentication, and will not proceed to the payment authorization.Default: **false**.<br><br>**Default**: `false` |

## Example

```ts
import { DetailsRequestAuthenticationData1 } from 'adyen';

const detailsRequestAuthenticationData1: DetailsRequestAuthenticationData1 = {
  authenticationOnly: false,
};
```

