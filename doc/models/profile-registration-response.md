
# Profile Registration Response

## Structure

`ProfileRegistrationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `redirectUrl` | [`Href5 \| undefined`](../../doc/models/href-5.md) | Optional | A short-lived URL that redirects the user to the iDEAL profile registration page. |

## Example

```ts
import { ProfileRegistrationResponse } from 'adyen';

const profileRegistrationResponse: ProfileRegistrationResponse = {
  redirectUrl: {
    href: 'href8',
  },
};
```

