/** RR-401 · the model answers the app shows after a factory item is scored. Read from the repo's factory data, never from the
 *  database: an item shows models only when its row exists (the owner's seed) AND the data holds models for it. */
import data from "@/content/factory/goethe-b1-model-answers.json";
import type { ModelData, ModelItem } from "./import";

const DATA = data as unknown as ModelData;
const byId = new Map(DATA.items.map((i) => [i.id, i]));
const byKey = new Map(DATA.items.map((i) => [`${i.level}::${i.taskType}::${i.title}`, i]));

export function modelsFor(item: { id: string; level: string; taskType: string; title: string }): ModelItem | null {
  return byId.get(item.id) ?? byKey.get(`${item.level}::${item.taskType}::${item.title}`) ?? null;
}
export const MODEL_LABEL = DATA.label;
export const MODEL_TRADEMARK = DATA.trademark;
export const LEVEL_POINTS = DATA.levelPoints;
