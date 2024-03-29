import "../../../components/entity/ha-state-label-badge";
import { LovelaceBadgeConfig } from "../../../data/lovelace/config/badge";
import { HomeAssistant } from "../../../types";
import { createErrorBadgeConfig } from "../badges/hui-error-badge";
import { createBadgeElement } from "../create-element/create-badge-element";
import { LovelaceBadge } from "../types";
import { ConfigError } from "./types";

export class HuiBadgePreview extends HTMLElement {
  private _hass?: HomeAssistant;

  private _element?: LovelaceBadge;

  private _config?: LovelaceBadgeConfig;

  private get _error() {
    return this._element?.tagName === "HUI-ERROR-CARD";
  }

  constructor() {
    super();
    this.addEventListener("ll-rebuild", () => {
      this._cleanup();
      if (this._config) {
        this.config = this._config;
      }
    });
  }

  set hass(hass: HomeAssistant) {
    this._hass = hass;
    if (this._element) {
      this._element.hass = hass;
    }
  }

  set error(error: ConfigError) {
    this._createBadge(
      createErrorBadgeConfig(`${error.type}: ${error.message}`)
    );
  }

  set config(configValue: LovelaceBadgeConfig) {
    const curConfig = this._config;
    this._config = configValue;

    if (!configValue) {
      this._cleanup();
      return;
    }

    if (!this._element) {
      this._createBadge(configValue);
      return;
    }

    // in case the element was an error element we always want to recreate it
    if (!this._error && curConfig && configValue.type === curConfig.type) {
      this._element.setConfig(configValue);
    } else {
      this._createBadge(configValue);
    }
  }

  private _createBadge(configValue: LovelaceBadgeConfig): void {
    this._cleanup();
    this._element = createBadgeElement(configValue);

    if (this._hass) {
      this._element!.hass = this._hass;
    }

    this.appendChild(this._element!);
  }

  private _cleanup() {
    if (!this._element) {
      return;
    }
    this.removeChild(this._element);
    this._element = undefined;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hui-badge-preview": HuiBadgePreview;
  }
}

customElements.define("hui-badge-preview", HuiBadgePreview);
