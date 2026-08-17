
# Get Onboarding Url Response

## Structure

`GetOnboardingUrlResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `invalidFields` | [`ErrorFieldType[] \| undefined`](../../doc/models/error-field-type.md) | Optional | Information about any invalid fields. |
| `pspReference` | `string \| undefined` | Optional | The reference of a request. Can be used to uniquely identify the request. |
| `redirectUrl` | `string \| undefined` | Optional | The URL to the Hosted Onboarding Page where you should redirect your sub-merchant. This URL must be used within 30 seconds and can only be used once. |
| `resultCode` | `string \| undefined` | Optional | The result code. |

## Example

```ts
import { FieldNameEnum, GetOnboardingUrlResponse } from 'adyen';

const getOnboardingUrlResponse: GetOnboardingUrlResponse = {
  invalidFields: [
    {
      errorCode: 78,
      errorDescription: 'errorDescription6',
      fieldType: {
        field: 'field6',
        fieldName: FieldNameEnum.DrivingLicenceFront,
        shareholderCode: 'shareholderCode0',
      },
    }
  ],
  pspReference: 'pspReference8',
  redirectUrl: 'redirectUrl0',
  resultCode: 'resultCode8',
};
```

