
# Association Listing

*This model accepts additional fields of type unknown.*

## Structure

`AssociationListing`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createdAt` | `string` | Required | The date and time when the association was created. |
| `entityId` | `string` | Required | The unique identifier of the entity.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `entityType` | [`ScaEntityType2`](../../doc/models/sca-entity-type-2.md) | Required | - |
| `scaDeviceId` | `string` | Required | The unique identifier of the SCA device.<br><br>**Constraints**: *Minimum Length*: `30`, *Maximum Length*: `30` |
| `scaDeviceName` | `string \| undefined` | Optional | The human-readable name for the SCA device that was registered.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `64` |
| `scaDeviceType` | [`ScaDeviceType3`](../../doc/models/sca-device-type-3.md) | Required | - |
| `status` | [`AssociationStatus1`](../../doc/models/association-status-1.md) | Required | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AssociationListing,
  AssociationStatus1,
  ScaDeviceType3,
  ScaEntityType2,
} from 'adyenlib';

const associationListing: AssociationListing = {
  createdAt: '2016-03-13T12:52:32.123Z',
  entityId: 'entityId8',
  entityType: ScaEntityType2.PaymentInstrument,
  scaDeviceId: 'BSDR11111111111A1AAA1AAAAA1AA1',
  scaDeviceType: ScaDeviceType3.Browser,
  status: AssociationStatus1.PendingApproval,
  scaDeviceName: 'scaDeviceName0',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

