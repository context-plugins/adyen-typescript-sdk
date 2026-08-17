
# Association Listing

## Structure

`AssociationListing`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createdAt` | `string` | Required | The date and time when the association was created. |
| `entityId` | `string` | Required | The unique identifier of the entity.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `entityType` | [`ScaEntityType2Enum`](../../doc/models/sca-entity-type-2-enum.md) | Required | The type of the entity.<br><br>Possible values: **accountHolder**, **legalEntity** or **paymentInstrument**. |
| `scaDeviceId` | `string` | Required | The unique identifier of the SCA device.<br><br>**Constraints**: *Minimum Length*: `30`, *Maximum Length*: `30` |
| `scaDeviceName` | `string \| undefined` | Optional | The human-readable name for the SCA device that was registered.<br><br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `64` |
| `scaDeviceType` | [`ScaDeviceType3Enum`](../../doc/models/sca-device-type-3-enum.md) | Required | The type of the device. |
| `status` | [`AssociationStatus1Enum`](../../doc/models/association-status-1-enum.md) | Required | The status of the association.<br><br>Possible values: **active** or **pendingApproval**. |

## Example

```ts
import {
  AssociationListing,
  AssociationStatus1Enum,
  ScaDeviceType3Enum,
  ScaEntityType2Enum,
} from 'adyen';

const associationListing: AssociationListing = {
  createdAt: '2016-03-13T12:52:32.123Z',
  entityId: 'entityId8',
  entityType: ScaEntityType2Enum.PaymentInstrument,
  scaDeviceId: 'BSDR11111111111A1AAA1AAAAA1AA1',
  scaDeviceType: ScaDeviceType3Enum.Browser,
  status: AssociationStatus1Enum.PendingApproval,
  scaDeviceName: 'scaDeviceName0',
};
```

