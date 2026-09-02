import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cardAcquisitionTransaction1Schema,
  type CardAcquisitionTransaction1,
} from "./card-acquisition-transaction1.js";
import { saleData1Schema, type SaleData1 } from "./sale-data1.js";

export type CardAcquisitionRequest2 = {
  saleData: SaleData1;
  cardAcquisitionTransaction: CardAcquisitionTransaction1;
};

export const cardAcquisitionRequest2Schema: Schema<CardAcquisitionRequest2> =
  s.object<CardAcquisitionRequest2>({
    saleData: saleData1Schema,
    cardAcquisitionTransaction: cardAcquisitionTransaction1Schema,
    _keysMap: {
      saleData: "SaleData",
      cardAcquisitionTransaction: "CardAcquisitionTransaction",
    },
  });
