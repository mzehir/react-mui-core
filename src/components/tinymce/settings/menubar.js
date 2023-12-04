const MENUBAR = {
  FILE: { key: "file", active: true },
  EDIT: { key: "edit", active: true },
  VIEW: { key: "view", active: true },
  INSERT: { key: "insert", active: true },
  FORMAT: { key: "format", active: true },
  TOOLS: { key: "tools", active: true },
  TABLE: { key: "table", active: true },
  HELP: { key: "help", active: true },
};

export function getActiveMenubarItems() {
  const activeMenuItems = Object.entries(MENUBAR)
    .filter(([_, item]) => item.active)
    .map(([_, item]) => item.key);

  return activeMenuItems.join(" ");
}
