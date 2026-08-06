
# Get Onboarding Url Response

*This model accepts additional fields of type unknown.*

## Structure

`GetOnboardingUrlResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Information about any invalid fields. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `redirectUrl` | `string \| undefined` | Optional | The URL to the Hosted Onboarding Page where you should redirect your sub-merchant. This URL must be used within 30 seconds and can only be used once. |
| `resultCode` | `string \| undefined` | Optional | The result code. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { FieldName, GetOnboardingUrlResponse } from 'adyen';

const getOnboardingUrlResponse: GetOnboardingUrlResponse = {
  invalidFields: [
    {
      errorCode: 78,
      errorDescription: 'errorDescription6',
      fieldType: {
        field: 'field6',
        fieldName: FieldName.DrivingLicenceFront,
        shareholderCode: 'shareholderCode0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  ],
  pspReference: 'pspReference8',
  redirectUrl: 'redirectUrl0',
  resultCode: 'resultCode8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

