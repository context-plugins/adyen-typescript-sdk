import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cardAcquisitionTransaction1Schema,
  type CardAcquisitionTransaction1,
} from "./card-acquisition-transaction1.js";
import { saleData1Schema, type SaleData1 } from "./sale-data1.js";

export type CardAcquisitionRequest = {
  saleData: SaleData1;
  cardAcquisitionTransaction: CardAcquisitionTransaction1;
};

export const cardAcquisitionRequestSchema: Schema<CardAcquisitionRequest> = s.object<CardAcquisitionRequest>({
  saleData: saleData1Schema,
  cardAcquisitionTransaction: cardAcquisitionTransaction1Schema,
  _keysMap: {
    saleData: "SaleData",
    cardAcquisitionTransaction: "CardAcquisitionTransaction",
  },
});
