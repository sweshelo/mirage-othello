import {
  DetailBase,
  UnitProp,
  generateUnitConfig,
  getMainProps,
  getMirrorProps,
  getWebProps,
} from "../../../../../lib/miragex/unit/common";

const detail = {
  code: "Othello/Stone",
  propsConfig: {
    state: UnitProp.Boolean(false),
    animationSpeed: UnitProp.Float(0.8),
    grabbable: UnitProp.Boolean(false),
  },
  children: undefined,
} as const satisfies DetailBase;

export type MainProps = getMainProps<typeof detail>;
export type MirrorProps = getMirrorProps<typeof detail>;
export type WebProps = getWebProps<typeof detail>;
export const unitConfig = generateUnitConfig(detail);
