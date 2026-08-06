
# Third Party Token Redundancy Info 1

Configuration for creating redundant payment tokens with third-party token vaults using the Adyen Forward API. This feature requires Forward API webhook integration and pre-configured templates in your Adyen account. Contact your Adyen account manager for setup and availability.

*This model accepts additional fields of type unknown.*

## Structure

`ThirdPartyTokenRedundancyInfo1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestParameters` | `Record<string, string> \| undefined` | Optional | Request-specific parameter values to populate the template placeholders. Each key must match a placeholder defined in the template referenced by `requestTemplateCode`. |
| `requestTemplateCode` | `string` | Required | Identifier for the third-party token request template configured in your Adyen account. This template defines the structure and endpoint for token requests. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { ThirdPartyTokenRedundancyInfo1 } from 'adyen';

const thirdPartyTokenRedundancyInfo1: ThirdPartyTokenRedundancyInfo1 = {
  requestTemplateCode: 'requestTemplateCode8',
  requestParameters: {
    'key0': 'requestParameters7'
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

