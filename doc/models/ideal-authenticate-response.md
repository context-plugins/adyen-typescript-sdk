
# Ideal Authenticate Response

*This model accepts additional fields of type unknown.*

## Structure

`IdealAuthenticateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `redirectUrl` | [`Href \| undefined`](../../doc/models/href.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { IdealAuthenticateResponse } from 'adyen';

const idealAuthenticateResponse: IdealAuthenticateResponse = {
  redirectUrl: {
    href: 'href8',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

