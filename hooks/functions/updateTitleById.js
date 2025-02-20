export function updateTitleById(data, id, newTitle) {
  return data.map((item) => {
    if (item.id === id) {
      return { ...item, title: newTitle };
    }

    if (item.children) {
      return {
        ...item,
        children: updateTitleById(item.children, id, newTitle),
      };
    }

    return item;
  });
}
