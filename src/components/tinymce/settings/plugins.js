const PLUGINS = {
  PREVIEW: { key: "preview", active: true },
  IMPORT_CSS: { key: "importcss", active: true },
  SEARCH_REPLACE: { key: "searchreplace", active: true },
  AUTO_LINK: { key: "autolink", active: true },
  AUTO_SAVE: { key: "autosave", active: true },
  SAVE: { key: "save", active: true },
  DIRECTIONALITY: { key: "directionality", active: true },
  CODE: { key: "code", active: true },
  VISUAL_BLOCKS: { key: "visualblocks", active: true },
  VISUAL_CHARS: { key: "visualchars", active: true },
  FULL_SCREEN: { key: "fullscreen", active: true },
  IMAGE: { key: "image", active: true },
  LINK: { key: "link", active: true },
  MEDIA: { key: "media", active: true },
  TEMPLATE: { key: "template", active: true },
  CODE_SAMPLE: { key: "codesample", active: true },
  TABLE: { key: "table", active: true },
  CHAR_MAP: { key: "charmap", active: true },
  PAGE_BREAK: { key: "pagebreak", active: true },
  NON_BREAKING: { key: "nonbreaking", active: true },
  ANCHOR: { key: "anchor", active: true },
  INSERT_DATE_TIME: { key: "insertdatetime", active: true },
  ADV_LIST: { key: "advlist", active: true },
  LISTS: { key: "lists", active: true },
  WORD_COUNT: { key: "wordcount", active: true },
  HELP: { key: "help", active: true },
  CHAR_MAP: { key: "charmap", active: true },
  QUICK_BARS: { key: "quickbars", active: true },
  EMOT_ICONS: { key: "emoticons", active: true },
  ACCORDION: { key: "accordion", active: true },
};

export function getActivePluginsItems() {
  const result = [];

  for (const pluginKey in PLUGINS) {
    if (PLUGINS[pluginKey].active) {
      result.push(PLUGINS[pluginKey].key);
    }
  }

  return result;
}
