const TOOLBAR = {
  GROUP_1: {
    UNDO: { key: "undo", active: true },
    REDO: { key: "redo", active: true },
  },
  GROUP_2: {
    ACCORDION: { key: "accordion", active: true },
    ACCORDION_REMOVE: { key: "accordionremove", active: true },
  },
  GROUP_3: {
    BLOCKS: { key: "blocks", active: true },
    FONT_FAMILY: { key: "fontfamily", active: true },
    FONT_SIZE: { key: "fontsize", active: true },
  },
  GROUP_4: {
    BOLD: { key: "bold", active: true },
    ITALIC: { key: "italic", active: true },
    UNDERLINE: { key: "underline", active: true },
    STRIKE_THROUGH: { key: "strikethrough", active: true },
  },
  GROUP_5: {
    ALIGN: { key: "align", active: true },
    NUM_LIST: { key: "numlist", active: true },
    BUL_LIST: { key: "bullist", active: true },
  },
  GROUP_6: {
    LINK: { key: "link", active: true },
    IMAGE: { key: "image", active: true },
  },
  GROUP_7: {
    TABLE: { key: "table", active: true },
    MEDIA: { key: "media", active: true },
  },
  GROUP_8: {
    LINE_HEIGHT: { key: "lineheight", active: true },
    OUTDENT: { key: "outdent", active: true },
    INDENT: { key: "indent", active: true },
  },
  GROUP_9: {
    FORE_COLOR: { key: "forecolor", active: true },
    BACK_COLOR: { key: "backcolor", active: true },
    REMOVE_FORMAT: { key: "removeformat", active: true },
  },
  GROUP_10: {
    CHAR_MAP: { key: "charmap", active: true },
    EMOT_ICONS: { key: "emoticons", active: true },
  },
  GROUP_11: {
    CODE: { key: "code", active: true },
    FULL_SCREEN: { key: "fullscreen", active: true },
    PREVIEW: { key: "preview", active: true },
  },
  GROUP_12: {
    SAVE: { key: "save", active: true },
    PRINT: { key: "print", active: true },
  },
  GROUP_13: {
    PAGE_BREAK: { key: "pagebreak", active: true },
    ANCHOR: { key: "anchor", active: true },
    CODE_SAMPLE: { key: "codesample", active: true },
  },
  GROUP_14: {
    LTR: { key: "ltr", active: true },
    RTL: { key: "rtl", active: true },
  },
};

export function getActiveToolbarItems() {
  let result = "";
  for (const groupKey in TOOLBAR) {
    const group = TOOLBAR[groupKey];
    let groupStr = "";

    for (const itemKey in group) {
      const item = group[itemKey];

      if (item.active) {
        groupStr += item.key + " ";
      }
    }

    if (groupStr) groupStr += "| ";
    if (groupStr) result += groupStr;
  }

  result = result.trim();
  if (result.endsWith("|")) {
    result = result.slice(0, -1);
  }

  return result;
}
