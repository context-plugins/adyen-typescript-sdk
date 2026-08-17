
# List Mandates Response

## Structure

`ListMandatesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `link` | [`Link2`](../../doc/models/link-2.md) | Required | Contains links to the next and previous page whenever applicable. |
| `mandates` | [`Mandate1[]`](../../doc/models/mandate-1.md) | Required | Contains a list of the mandates. |

## Example

```ts
import { ListMandatesResponse } from 'adyen';

const listMandatesResponse: ListMandatesResponse = {
  link: {
    first: {
      href: 'href2',
    },
    last: {
      href: 'href2',
    },
    next: {
      href: 'href4',
    },
    previous: {
      href: 'href0',
    },
    self: {
      href: 'href0',
    },
  },
  mandates: [
    {
      balanceAccountId: 'balanceAccountId4',
      counterparty: {
        accountHolder: {
          fullName: 'fullName0',
        },
        accountIdentification: {
          type: 'MandateAccountIdentification2',
        },
      },
      createdAt: '2016-03-13T12:52:32.123Z',
      id: 'id4',
      paymentInstrumentId: 'paymentInstrumentId6',
    }
  ],
};
```

