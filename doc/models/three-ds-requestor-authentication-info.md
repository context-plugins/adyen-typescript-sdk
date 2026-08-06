
# Three Ds Requestor Authentication Info

Information about how the 3DS Requestor authenticated the cardholder before or during the transaction

*This model accepts additional fields of type unknown.*

## Structure

`ThreeDsRequestorAuthenticationInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `threeDsReqAuthData` | `string \| undefined` | Optional | Data that documents and supports a specific authentication process. Maximum length: 2048 bytes. |
| `threeDsReqAuthMethod` | [`ThreeDsReqAuthMethod \| undefined`](../../doc/models/three-ds-req-auth-method.md) | Optional | **Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `threeDsReqAuthTimestamp` | `string \| undefined` | Optional | Date and time in UTC of the cardholder authentication. Format: YYYYMMDDHHMM<br><br>**Constraints**: *Minimum Length*: `12`, *Maximum Length*: `12` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ThreeDsReqAuthMethod,
  ThreeDsRequestorAuthenticationInfo,
} from 'adyen';

const threeDsRequestorAuthenticationInfo: ThreeDsRequestorAuthenticationInfo = {
  threeDsReqAuthData: 'threeDSReqAuthData8',
  threeDsReqAuthMethod: ThreeDsReqAuthMethod.Enum05,
  threeDsReqAuthTimestamp: 'threeDSReqAuthTimestamp0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

