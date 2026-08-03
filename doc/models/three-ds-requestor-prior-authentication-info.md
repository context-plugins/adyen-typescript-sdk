
# Three Ds Requestor Prior Authentication Info

Information about how the 3DS Requestor authenticated the cardholder as part of a previous 3DS transaction.

*This model accepts additional fields of type unknown.*

## Structure

`ThreeDsRequestorPriorAuthenticationInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `threeDsReqPriorAuthData` | `string \| undefined` | Optional | Data that documents and supports a specific authentication process. Maximum length: 2048 bytes. |
| `threeDsReqPriorAuthMethod` | [`ThreeDsReqPriorAuthMethod \| undefined`](../../doc/models/three-ds-req-prior-auth-method.md) | Optional | **Constraints**: *Minimum Length*: `2`, *Maximum Length*: `2` |
| `threeDsReqPriorAuthTimestamp` | `string \| undefined` | Optional | Date and time in UTC of the prior cardholder authentication. Format: YYYYMMDDHHMM<br><br>**Constraints**: *Minimum Length*: `12`, *Maximum Length*: `12` |
| `threeDsReqPriorRef` | `string \| undefined` | Optional | This data element provides additional information to the ACS to determine the best approach for handing a request. This data element contains an ACS Transaction ID for a prior authenticated transaction. For example, the first recurring transaction that was authenticated with the cardholder. Length: 30 characters.<br><br>**Constraints**: *Minimum Length*: `36`, *Maximum Length*: `36` |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  ThreeDsReqPriorAuthMethod,
  ThreeDsRequestorPriorAuthenticationInfo,
} from 'adyenlib';

const threeDsRequestorPriorAuthenticationInfo: ThreeDsRequestorPriorAuthenticationInfo = {
  threeDsReqPriorAuthData: 'threeDSReqPriorAuthData8',
  threeDsReqPriorAuthMethod: ThreeDsReqPriorAuthMethod.Enum03,
  threeDsReqPriorAuthTimestamp: 'threeDSReqPriorAuthTimestamp6',
  threeDsReqPriorRef: 'threeDSReqPriorRef8',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

