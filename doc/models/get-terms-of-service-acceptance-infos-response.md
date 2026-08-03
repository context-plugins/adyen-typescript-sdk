
# Get Terms of Service Acceptance Infos Response

*This model accepts additional fields of type unknown.*

## Structure

`GetTermsOfServiceAcceptanceInfosResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`TermsOfServiceAcceptanceInfo[] \| undefined`](../../doc/models/terms-of-service-acceptance-info.md) | Optional | The Terms of Service acceptance information. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { GetTermsOfServiceAcceptanceInfosResponse, Type25 } from 'adyenlib';

const getTermsOfServiceAcceptanceInfosResponse: GetTermsOfServiceAcceptanceInfosResponse = {
  data: [
    {
      acceptedBy: 'acceptedBy8',
      acceptedFor: 'acceptedFor0',
      createdAt: '2016-03-13T12:52:32.123Z',
      id: 'id0',
      type: Type25.AdyenAccount,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

