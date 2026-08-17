
# Ideal Auth Link Response

## Structure

`IdealAuthLinkResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `redirectUrl` | [`Href3 \| undefined`](../../doc/models/href-3.md) | Optional | A short-lived URL that redirects the user to the iDEAL profile management page. |

## Example

```ts
import { IdealAuthLinkResponse } from 'adyen';

const idealAuthLinkResponse: IdealAuthLinkResponse = {
  redirectUrl: {
    href: 'href8',
  },
};
```

