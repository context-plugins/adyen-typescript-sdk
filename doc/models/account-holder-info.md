
# Account Holder Info

*This model accepts additional fields of type unknown.*

## Structure

`AccountHolderInfo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `balancePlatform` | `string \| undefined` | Optional | The unique identifier of the [balance platform](https://docs.adyen.com/api-explorer/#/balanceplatform/latest/get/balancePlatforms/{id}__queryParam_id) to which the account holder belongs. Required in the request if your API credentials can be used for multiple balance platforms. |
| `capabilities` | [`Record<string, AccountHolderCapability> \| undefined`](../../doc/models/account-holder-capability.md) | Optional | Contains key-value pairs that specify the actions that an account holder can do in your platform. The key is a capability required for your integration. For example, **issueCard** for Issuing. The value is an object containing the settings for the capability. |
| `contactDetails` | [`ContactDetails \| undefined`](../../doc/models/contact-details.md) | Optional | - |
| `description` | `string \| undefined` | Optional | Your description for the account holder.<br><br>**Constraints**: *Maximum Length*: `300` |
| `legalEntityId` | `string` | Required | The unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/legalentity/latest/post/legalEntities#responses-200-id) associated with the account holder. Adyen performs a verification process against the legal entity of the account holder. |
| `metadata` | `Record<string, string> \| undefined` | Optional | A set of key and value pairs for general use.<br>The keys do not have specific names and may be used for storing miscellaneous data as desired.<br><br>> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs. |
| `migratedAccountHolderCode` | `string \| undefined` | Optional, Read-only | The unique identifier of the migrated account holder in the classic integration. |
| `reference` | `string \| undefined` | Optional | Your reference for the account holder.<br><br>**Constraints**: *Maximum Length*: `150` |
| `timeZone` | `string \| undefined` | Optional | The time zone of the account holder. For example, **Europe/Amsterdam**.<br>Defaults to the time zone of the balance platform if no time zone is set. For possible values, see the [list of time zone codes](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). |
| `additionalProperties` | `Record<string, unknown>` | Optional | - |

## Example

```ts
import {
  AccountHolderInfo,
  AllowedLevel,
  Capability,
  FundingSource,
  Interval,
  Type21,
  Type3,
  Type4,
} from 'adyenlib';

const accountHolderInfo: AccountHolderInfo = {
  legalEntityId: 'legalEntityId4',
  balancePlatform: 'balancePlatform2',
  capabilities: {
    'key0': {
      allowed: false,
      allowedLevel: AllowedLevel.High,
      allowedSettings: {
        amountPerIndustry: {
          'key0': {
            currency: 'currency8',
            value: BigInt(56),
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          'key1': {
            currency: 'currency8',
            value: BigInt(56),
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        },
        authorizedCardUsers: false,
        fundingSource: [
          FundingSource.Credit,
          FundingSource.Debit,
          FundingSource.Prepaid
        ],
        interval: Interval.Daily,
        maxAmount: {
          currency: 'currency4',
          value: BigInt(160),
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      enabled: false,
      problems: [
        {
          entity: {
            documents: [
              'documents1',
              'documents2'
            ],
            id: 'id2',
            owner: {
              documents: [
                'documents3',
                'documents4'
              ],
              id: 'id4',
              type: Type3.LegalEntity,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            type: Type3.LegalEntity,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          verificationErrors: [
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          entity: {
            documents: [
              'documents1',
              'documents2'
            ],
            id: 'id2',
            owner: {
              documents: [
                'documents3',
                'documents4'
              ],
              id: 'id4',
              type: Type3.LegalEntity,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            type: Type3.LegalEntity,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          verificationErrors: [
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          entity: {
            documents: [
              'documents1',
              'documents2'
            ],
            id: 'id2',
            owner: {
              documents: [
                'documents3',
                'documents4'
              ],
              id: 'id4',
              type: Type3.LegalEntity,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            type: Type3.LegalEntity,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          verificationErrors: [
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    'key1': {
      allowed: false,
      allowedLevel: AllowedLevel.High,
      allowedSettings: {
        amountPerIndustry: {
          'key0': {
            currency: 'currency8',
            value: BigInt(56),
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          'key1': {
            currency: 'currency8',
            value: BigInt(56),
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        },
        authorizedCardUsers: false,
        fundingSource: [
          FundingSource.Credit,
          FundingSource.Debit,
          FundingSource.Prepaid
        ],
        interval: Interval.Daily,
        maxAmount: {
          currency: 'currency4',
          value: BigInt(160),
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      enabled: false,
      problems: [
        {
          entity: {
            documents: [
              'documents1',
              'documents2'
            ],
            id: 'id2',
            owner: {
              documents: [
                'documents3',
                'documents4'
              ],
              id: 'id4',
              type: Type3.LegalEntity,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            type: Type3.LegalEntity,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          verificationErrors: [
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          entity: {
            documents: [
              'documents1',
              'documents2'
            ],
            id: 'id2',
            owner: {
              documents: [
                'documents3',
                'documents4'
              ],
              id: 'id4',
              type: Type3.LegalEntity,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            type: Type3.LegalEntity,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          verificationErrors: [
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          entity: {
            documents: [
              'documents1',
              'documents2'
            ],
            id: 'id2',
            owner: {
              documents: [
                'documents3',
                'documents4'
              ],
              id: 'id4',
              type: Type3.LegalEntity,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            type: Type3.LegalEntity,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          verificationErrors: [
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    'key2': {
      allowed: false,
      allowedLevel: AllowedLevel.High,
      allowedSettings: {
        amountPerIndustry: {
          'key0': {
            currency: 'currency8',
            value: BigInt(56),
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          'key1': {
            currency: 'currency8',
            value: BigInt(56),
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          }
        },
        authorizedCardUsers: false,
        fundingSource: [
          FundingSource.Credit,
          FundingSource.Debit,
          FundingSource.Prepaid
        ],
        interval: Interval.Daily,
        maxAmount: {
          currency: 'currency4',
          value: BigInt(160),
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        additionalProperties: {
          'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
        },
      },
      enabled: false,
      problems: [
        {
          entity: {
            documents: [
              'documents1',
              'documents2'
            ],
            id: 'id2',
            owner: {
              documents: [
                'documents3',
                'documents4'
              ],
              id: 'id4',
              type: Type3.LegalEntity,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            type: Type3.LegalEntity,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          verificationErrors: [
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          entity: {
            documents: [
              'documents1',
              'documents2'
            ],
            id: 'id2',
            owner: {
              documents: [
                'documents3',
                'documents4'
              ],
              id: 'id4',
              type: Type3.LegalEntity,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            type: Type3.LegalEntity,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          verificationErrors: [
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        },
        {
          entity: {
            documents: [
              'documents1',
              'documents2'
            ],
            id: 'id2',
            owner: {
              documents: [
                'documents3',
                'documents4'
              ],
              id: 'id4',
              type: Type3.LegalEntity,
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            type: Type3.LegalEntity,
            additionalProperties: {
              'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
            },
          },
          verificationErrors: [
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            },
            {
              capabilities: [
                Capability.UseCardInRestrictedIndustriesCommercial
              ],
              code: 'code0',
              message: 'message8',
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  code: 'code4',
                  message: 'message6',
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              subErrors: [
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                },
                {
                  capabilities: [
                    Capability.Processing,
                    Capability.PayoutToTransferInstrument
                  ],
                  code: 'code2',
                  message: 'message4',
                  type: Type21.InvalidInput,
                  remediatingActions: [
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    },
                    {
                      code: 'code4',
                      message: 'message6',
                      additionalProperties: {
                        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                      },
                    }
                  ],
                  additionalProperties: {
                    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
                  },
                }
              ],
              additionalProperties: {
                'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
              },
            }
          ],
          additionalProperties: {
            'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
          },
        }
      ],
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    }
  },
  contactDetails: {
    address: {
      city: 'city6',
      country: 'country0',
      houseNumberOrName: 'houseNumberOrName4',
      postalCode: 'postalCode8',
      street: 'street6',
      stateOrProvince: 'stateOrProvince4',
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    email: 'email6',
    phone: {
      number: 'number8',
      type: Type4.Landline,
      additionalProperties: {
        'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
      },
    },
    webAddress: 'webAddress0',
    additionalProperties: {
      'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
    },
  },
  description: 'description0',
  metadata: {
    'key0': 'metadata3',
    'key1': 'metadata4'
  },
  additionalProperties: {
    'exampleAdditionalProperty': { 'key1': 'val1', 'key2': 'val2' }
  },
};
```

