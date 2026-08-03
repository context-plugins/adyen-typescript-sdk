
# Transfer

*This model accepts additional fields of type unknown.*

## Structure

`Transfer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountHolder` | [`ResourceReference \| undefined`](../../doc/models/resource-reference.md) | Optional | - |
| `amount` | [`Amount5`](../../doc/models/amount-5.md) | Required | - |
| `balanceAccount` | [`ResourceReference \| undefined`](../../doc/models/resource-reference.md) | Optional | - |
| `category` | [`Category3`](../../doc/models/category-3.md) | Required | - |
| `categoryData` | [`TransferCategoryData \| undefined`](../../doc/models/containers/transfer-category-data.md) | Optional | This is a container for one-of cases. |
| `counterparty` | [`CounterpartyV3`](../../doc/models/counterparty-v3.md) | Required | - |
| `createdAt` | `string \| undefined` | Optional | The date and time when the transfer was created, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**. |
| `creationDate` | `string \| undefined` | Optional | The date and time when the event was triggered, in ISO 8601 extended format. For example, **2020-12-18T10:15:30+01:00**. |
| `description` | `string \| undefined` | Optional | Your description for the transfer. It is used by most banks as the transfer description. We recommend sending a maximum of 140 characters, otherwise the description may be truncated.<br><br>Supported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**<br><br>Supported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z] [0-9] & $ % # @** **~ = + - _ ' " ! ?** |
| `directDebitInformation` | [`DirectDebitInformation \| undefined`](../../doc/models/direct-debit-information.md) | Optional | - |
| `direction` | [`Direction \| undefined`](../../doc/models/direction.md) | Optional | - |
| `executionDate` | [`ExecutionDate \| undefined`](../../doc/models/execution-date.md) | Optional | - |
| `id` | `string \| undefined` | Optional | The ID of the resource. |
| `paymentInstrument` | [`PaymentInstrument2 \| undefined`](../../doc/models/payment-instrument-2.md) | Optional | - |
| `reason` | [`Reason21 \| undefined`](../../doc/models/reason-21.md) | Optional | - |
| `reference` | `string \| undefined` | Optional | Your reference for the transfer, used internally within your platform. If you don't provide this in the request, Adyen generates a unique reference.<br><br>**Constraints**: *Maximum Length*: `80` |
| `referenceForBeneficiary` | `string \| undefined` | Optional | A reference that is sent to the recipient. This reference is also sent in all webhooks related to the transfer, so you can use it to track statuses for both the source and recipient of funds.<br><br>Supported characters: **a-z**, **A-Z**, **0-9**.The maximum length depends on the `category`.<br><br>- **internal**: 80 characters<br><br>- **bank**: 35 characters when transferring to an IBAN, 15 characters for others. |
| `review` | [`TransferReview \| undefined`](../../doc/models/transfer-review.md) | Optional | - |
| `status` | [`Status53`](../../doc/models/status-53.md) | Required | - |
| `type` | [`Type83 \| undefined`](../../doc/models/type-83.md) | Optional | - |
| `ultimateParty` | [`UltimatePartyIdentification \| undefined`](../../doc/models/ultimate-party-identification.md) | Optional | - |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  Category3,
  Priority,
  Status53,
  Transfer,
  Type312,
  Type413,
} from 'adyenlib';

const transfer: Transfer = {
  amount: {
    currency: 'currency2',
    value: BigInt(110),
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  category: Category3.PlatformPayment,
  counterparty: {
    balanceAccountId: 'balanceAccountId0',
    bankAccount: {
      accountHolder: {
        address: {
          country: 'country0',
          city: 'city6',
          line1: 'line18',
          line2: 'line20',
          postalCode: 'postalCode8',
          stateOrProvince: 'stateOrProvince4',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        dateOfBirth: '2016-03-13T12:52:32.123Z',
        email: 'email6',
        firstName: 'firstName4',
        fullName: 'fullName0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      accountIdentification: {
        accountNumber: 'accountNumber4',
        bsbCode: 'bsbCode8',
        type: Type413.AuLocal,
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      storedPaymentMethodId: 'storedPaymentMethodId2',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    card: {
      cardHolder: {
        address: {
          country: 'country0',
          city: 'city6',
          line1: 'line18',
          line2: 'line20',
          postalCode: 'postalCode8',
          stateOrProvince: 'stateOrProvince4',
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        dateOfBirth: '2016-03-13T12:52:32.123Z',
        email: 'email0',
        firstName: 'firstName8',
        fullName: 'fullName6',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      cardIdentification: {
        expiryMonth: 'expiryMonth2',
        expiryYear: 'expiryYear2',
        issueNumber: 'issueNumber0',
        number: 'number6',
        startMonth: 'startMonth8',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    merchant: {
      acquirerId: 'acquirerId6',
      mcc: 'mcc4',
      merchantId: 'merchantId0',
      nameLocation: {
        city: 'city6',
        country: 'country8',
        countryOfOrigin: 'countryOfOrigin0',
        name: 'name4',
        rawData: 'rawData0',
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      postalCode: 'postalCode6',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    transferInstrumentId: 'transferInstrumentId4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  status: Status53.Booked,
  accountHolder: {
    description: 'description0',
    id: 'id0',
    reference: 'reference4',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  balanceAccount: {
    description: 'description2',
    id: 'id2',
    reference: 'reference2',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  categoryData: {
    priority: Priority.Instant,
    type: Type312.Bank,
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  createdAt: '2016-03-13T12:52:32.123Z',
  creationDate: '2016-03-13T12:52:32.123Z',
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

