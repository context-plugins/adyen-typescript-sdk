
# Ideal Authenticate Response

## Structure

`IdealAuthenticateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `redirectUrl` | [`Href4 \| undefined`](../../doc/models/href-4.md) | Optional | A short-lived URL that redirects the user to the iDEAL page that is required for authentication. |

## Example

```ts
import { IdealAuthenticateResponse } from 'adyen';

const idealAuthenticateResponse: IdealAuthenticateResponse = {
  redirectUrl: {
    href: 'href8',
  },
};
```

