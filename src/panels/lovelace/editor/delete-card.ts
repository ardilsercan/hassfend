import { isStrategyView } from "../../../data/lovelace/config/view";
import { showAlertDialog } from "../../../dialogs/generic/show-dialog-box";
import { HomeAssistant } from "../../../types";
import { showDeleteSuccessToast } from "../../../util/toast-deleted-success";
import { Lovelace } from "../types";
import { showDeleteCardDialog } from "./card-editor/show-delete-card-dialog";
import { deleteCard, insertCard } from "./config-util";

export async function confDeleteCard(
  element: HTMLElement,
  hass: HomeAssistant,
  lovelace: Lovelace,
  path: [number, number]
): Promise<void> {
  const view = lovelace.config.views[path[0]];
  if (isStrategyView(view)) {
    throw new Error("Deleting cards in a strategy view is not supported.");
  }
  const cardConfig = view.cards![path[1]];
  showDeleteCardDialog(element, {
    cardConfig,
    deleteCard: async () => {
      try {
        const newLovelace = deleteCard(lovelace.config, path);
        await lovelace.saveConfig(newLovelace);
        const action = async () => {
          await lovelace.saveConfig(insertCard(newLovelace, path, cardConfig));
        };
        showDeleteSuccessToast(element, hass!, action);
      } catch (err: any) {
        showAlertDialog(element, {
          text: `Deleting failed: ${err.message}`,
        });
      }
    },
  });
}
