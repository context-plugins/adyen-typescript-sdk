
# Get Terms of Service Acceptance Infos Response

## Structure

`GetTermsOfServiceAcceptanceInfosResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`TermsOfServiceAcceptanceInfo[] \| undefined`](../../doc/models/terms-of-service-acceptance-info.md) | Optional | The Terms of Service acceptance information. |

## Example

```ts
import { GetTermsOfServiceAcceptanceInfosResponse, Type64Enum } from 'adyen';

const getTermsOfServiceAcceptanceInfosResponse: GetTermsOfServiceAcceptanceInfosResponse = {
  data: [
    {
      acceptedBy: 'acceptedBy8',
      acceptedFor: 'acceptedFor0',
      createdAt: '2016-03-13T12:52:32.123Z',
      id: 'id0',
      type: Type64Enum.AdyenAccount,
    }
  ],
};
```

