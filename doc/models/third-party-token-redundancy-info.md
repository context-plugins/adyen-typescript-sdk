
# Third Party Token Redundancy Info

*This model accepts additional fields of type unknown.*

## Structure

`ThirdPartyTokenRedundancyInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestParameters` | `Record<string, string> \| undefined` | Optional | Request-specific parameter values to populate the template placeholders. Each key must match a placeholder defined in the template referenced by `requestTemplateCode`. |
| `requestTemplateCode` | `string` | Required | Identifier for the third-party token request template configured in your Adyen account. This template defines the structure and endpoint for token requests. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ThirdPartyTokenRedundancyInfo } from 'adyenlib';

const thirdPartyTokenRedundancyInfo: ThirdPartyTokenRedundancyInfo = {
  requestTemplateCode: 'requestTemplateCode2',
  requestParameters: {
    'key0': 'requestParameters1',
    'key1': 'requestParameters2'
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

