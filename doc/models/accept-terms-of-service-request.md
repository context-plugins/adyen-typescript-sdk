
# Accept Terms of Service Request

*This model accepts additional fields of type unknown.*

## Structure

`AcceptTermsOfServiceRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acceptedBy` | `string` | Required | The legal entity ID of the user accepting the Terms of Service.<br><br>For organizations, this must be the individual legal entity ID of an authorized signatory for the organization.<br><br>For sole proprietorships, this must be the individual legal entity ID of the owner.<br><br>For individuals, this must be the individual legal entity id of either the individual, parent, or guardian. |
| `ipAddress` | `string \| undefined` | Optional | The IP address of the user accepting the Terms of Service. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { AcceptTermsOfServiceRequest } from 'adyen';

const acceptTermsOfServiceRequest: AcceptTermsOfServiceRequest = {
  acceptedBy: 'acceptedBy6',
  ipAddress: 'ipAddress8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

