
# Network Token 2

The details of the network token.

*This model accepts additional fields of type unknown.*

## Structure

`NetworkToken2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `brandVariant` | `string \| undefined` | Optional | The card brand variant of the payment instrument associated with the network token. For example, **mc_prepaid_mrw**. |
| `creationDate` | `string \| undefined` | Optional | Date and time when the network token was created, in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) extended format. For example, **2025-03-19T10:15:30+01:00**.. |
| `device` | [`DeviceInfo \| undefined`](../../doc/models/device-info.md) | Optional | - |
| `id` | `string \| undefined` | Optional | The unique identifier of the network token. |
| `paymentInstrumentId` | `string \| undefined` | Optional | The unique identifier of the payment instrument to which this network token belongs to. |
| `status` | [`Status9 \| undefined`](../../doc/models/status-9.md) | Optional | - |
| `tokenLastFour` | `string \| undefined` | Optional | The last four digits of the network token `id`. |
| `tokenRequestor` | [`NetworkTokenRequestor \| undefined`](../../doc/models/network-token-requestor.md) | Optional | - |
| `type` | `string \| undefined` | Optional | The type of network token. For example, **wallet**, **cof**. |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import { NetworkToken2 } from 'adyen';

const networkToken2: NetworkToken2 = {
  brandVariant: 'brandVariant4',
  creationDate: '2016-03-13T12:52:32.123Z',
  device: {
    formFactor: 'formFactor4',
    osName: 'osName6',
    phone: {
      hashedNumber: 'hashedNumber2',
      lastFourDigits: 'lastFourDigits8',
      number: 'number8',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  id: 'id2',
  paymentInstrumentId: 'paymentInstrumentId4',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

