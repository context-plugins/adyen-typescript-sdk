
# Network Token

## Structure

`NetworkToken`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brandVariant` | `string \| undefined` | Optional | The card brand variant of the payment instrument associated with the network token. For example, **mc_prepaid_mrw**. |
| `creationDate` | `string \| undefined` | Optional | Date and time when the network token was created, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) extended format. For example, **2025-03-19T10:15:30+01:00**.. |
| `device` | [`DeviceInfo1 \| undefined`](../../doc/models/device-info-1.md) | Optional | Contains information about the device used to provision the network token. |
| `id` | `string \| undefined` | Optional | The unique identifier of the network token. |
| `paymentInstrumentId` | `string \| undefined` | Optional | The unique identifier of the payment instrument to which this network token belongs to. |
| `status` | [`Status91Enum \| undefined`](../../doc/models/status-91-enum.md) | Optional | The status of the network token. Possible values: **active**, **inactive**, **suspended**, **closed**. |
| `tokenLastFour` | `string \| undefined` | Optional | The last four digits of the network token `id`. |
| `tokenRequestor` | [`Item \| undefined`](../../doc/models/item.md) | Optional | The token requestor is an entity who requested tokenization of the card for secure payments. |
| `type` | `string \| undefined` | Optional | The type of network token. For example, **wallet**, **cof**. |

## Example

```ts
import { NetworkToken } from 'adyen';

const networkToken: NetworkToken = {
  brandVariant: 'brandVariant0',
  creationDate: '2016-03-13T12:52:32.123Z',
  device: {
    formFactor: 'formFactor4',
    osName: 'osName6',
    phone: {
      hashedNumber: 'hashedNumber2',
      lastFourDigits: 'lastFourDigits8',
      number: 'number8',
    },
  },
  id: 'id8',
  paymentInstrumentId: 'paymentInstrumentId0',
};
```

