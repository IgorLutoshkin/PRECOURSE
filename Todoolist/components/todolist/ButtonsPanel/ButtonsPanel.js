export function ButtonsPanel() {
  const container = document.createElement("div");
  const addElement = document.createElement("button");
	addElement.append('+ add')
  container.append(addElement);
  return container;
}
