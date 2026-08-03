
# Supporting Entity Capability

*This model accepts additional fields of type unknown.*

## Structure

`SupportingEntityCapability`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowed` | `boolean \| undefined` | Optional, Read-only | Indicates whether the capability is allowed for the supporting entity.<br><br>If a capability is allowed for a supporting entity but not for the parent legal entity, this means the legal entity has other supporting entities that failed verification.<br><br>**You can use the allowed supporting entity** regardless of the verification status of other supporting entities. |
| `id` | `string \| undefined` | Optional, Read-only | Supporting entity reference |
| `requested` | `boolean \| undefined` | Optional, Read-only | Indicates whether the supporting entity capability is requested. |
| `verificationStatus` | `string \| undefined` | Optional, Read-only | The status of the verification checks for the capability of the supporting entity.<br><br>Possible values:<br><br>* **pending**: Adyen is running the verification.<br><br>* **invalid**: The verification failed. Check if the `errors` array contains more information.<br><br>* **valid**: The verification has been successfully completed.<br><br>* **rejected**: Adyen has verified the information, but found reasons to not allow the capability. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { SupportingEntityCapability } from 'adyenlib';

const supportingEntityCapability: SupportingEntityCapability = {
  allowed: false,
  id: 'id8',
  requested: false,
  verificationStatus: 'verificationStatus0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

