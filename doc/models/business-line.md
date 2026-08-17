
# Business Line

## Structure

`BusinessLine`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string` | Required, Read-only | The unique identifier of the business line. |
| `industryCode` | `string` | Required | A code that represents the industry of the legal entity for [marketplaces](https://docs.adyen.com/marketplaces/verification-requirements/reference-additional-products/#list-industry-codes) or [platforms](https://docs.adyen.com/platforms/verification-requirements/reference-additional-products/#list-industry-codes). For example, **4431A** for computer software stores. |
| `industryCodeDescription` | `string \| undefined` | Optional, Read-only | The description of the industry code. |
| `legalEntityId` | `string` | Required | Unique identifier of the [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities__resParam_id) that owns the business line. |
| `problems` | [`CapabilityProblem1[] \| undefined`](../../doc/models/capability-problem-1.md) | Optional | The verification errors related to capabilities for this supporting entity. |
| `salesChannels` | `string[] \| undefined` | Optional | A list of channels where goods or services are sold.<br><br>Possible values: **pos**, **posMoto**, **eCommerce**, **ecomMoto**, **payByLink**.<br><br>Required only in combination with the `service` **paymentProcessing**. |
| `service` | [`ServiceEnum`](../../doc/models/service-enum.md) | Required | The service for which you are creating the business line.<br><br>Possible values:<br><br>* **paymentProcessing**<br>* **issuing**<br>* **banking** |
| `sourceOfFunds` | [`SourceOfFunds11 \| undefined`](../../doc/models/source-of-funds-11.md) | Optional | Contains information about the source of your user's funds. Required only if the `service` is **banking** or **issuing**. |
| `webData` | [`WebData[] \| undefined`](../../doc/models/web-data.md) | Optional | List of website URLs where your user's goods or services are sold. When this is required for a service but your user does not have an online presence, provide the reason in the `webDataExemption` object. |
| `webDataExemption` | [`WebDataExemption1 \| undefined`](../../doc/models/web-data-exemption-1.md) | Optional | The reason why the web data is not provided. |

## Example

```ts
import {
  BusinessLine,
  CapabilityEnum,
  ServiceEnum,
  Type311Enum,
  Type512Enum,
} from 'adyen';

const businessLine: BusinessLine = {
  id: '',
  industryCode: 'industryCode8',
  legalEntityId: 'legalEntityId2',
  service: ServiceEnum.Banking,
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
          type: Type311Enum.LegalEntity,
        },
        type: Type311Enum.BankAccount,
      },
      verificationErrors: [
        {
          capabilities: [
            CapabilityEnum.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
            },
            {
              code: 'code4',
              message: 'message6',
            }
          ],
          subErrors: [
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            },
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            },
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            }
          ],
        },
        {
          capabilities: [
            CapabilityEnum.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
            },
            {
              code: 'code4',
              message: 'message6',
            }
          ],
          subErrors: [
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            },
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            },
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            }
          ],
        },
        {
          capabilities: [
            CapabilityEnum.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
            },
            {
              code: 'code4',
              message: 'message6',
            }
          ],
          subErrors: [
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            },
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            },
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            }
          ],
        }
      ],
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
          type: Type311Enum.LegalEntity,
        },
        type: Type311Enum.BankAccount,
      },
      verificationErrors: [
        {
          capabilities: [
            CapabilityEnum.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
            },
            {
              code: 'code4',
              message: 'message6',
            }
          ],
          subErrors: [
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            },
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            },
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            }
          ],
        },
        {
          capabilities: [
            CapabilityEnum.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
            },
            {
              code: 'code4',
              message: 'message6',
            }
          ],
          subErrors: [
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            },
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            },
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            }
          ],
        },
        {
          capabilities: [
            CapabilityEnum.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
            },
            {
              code: 'code4',
              message: 'message6',
            }
          ],
          subErrors: [
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            },
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            },
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            }
          ],
        }
      ],
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
          type: Type311Enum.LegalEntity,
        },
        type: Type311Enum.BankAccount,
      },
      verificationErrors: [
        {
          capabilities: [
            CapabilityEnum.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
            },
            {
              code: 'code4',
              message: 'message6',
            }
          ],
          subErrors: [
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            },
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            },
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            }
          ],
        },
        {
          capabilities: [
            CapabilityEnum.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
            },
            {
              code: 'code4',
              message: 'message6',
            }
          ],
          subErrors: [
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            },
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            },
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            }
          ],
        },
        {
          capabilities: [
            CapabilityEnum.UseCardInRestrictedIndustriesCommercial
          ],
          code: 'code0',
          message: 'message8',
          remediatingActions: [
            {
              code: 'code4',
              message: 'message6',
            },
            {
              code: 'code4',
              message: 'message6',
            }
          ],
          subErrors: [
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            },
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            },
            {
              capabilities: [
                CapabilityEnum.Processing,
                CapabilityEnum.PayoutToTransferInstrument
              ],
              code: 'code2',
              message: 'message4',
              type: Type512Enum.DataReview,
              remediatingActions: [
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                },
                {
                  code: 'code4',
                  message: 'message6',
                }
              ],
            }
          ],
        }
      ],
    }
  ],
  salesChannels: [
    'salesChannels0',
    'salesChannels1'
  ],
  sourceOfFunds: {
    adyenProcessedFunds: false,
    amount: {
      currency: 'currency2',
      value: BigInt(110),
    },
    assetMonthsHeld: 46,
    cryptocurrencyExchange: 'cryptocurrencyExchange2',
    dateOfFundsReceived: '2016-03-13T12:52:32.123Z',
    dateOfSourceEvent: '2016-03-13T12:52:32.123Z',
  },
  webData: [
    {
      webAddress: 'webAddress4',
    },
    {
      webAddress: 'webAddress4',
    },
    {
      webAddress: 'webAddress4',
    }
  ],
};
```

