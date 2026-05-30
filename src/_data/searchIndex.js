module.exports = function () {
  var index = [];
  var collections = this.ctx && this.ctx.collections;
  if (!collections) return index;

  var config = [
    { collection: "restaurants", label: "Restaurant", icon: "🍽️" },
    { collection: "stores", label: "Store", icon: "🏪" },
    { collection: "attractions", label: "Attraction", icon: "🏔️" },
    { collection: "services", label: "Service", icon: "🔧" },
    { collection: "events", label: "Event", icon: "📅" },
  ];

  config.forEach(function (cfg) {
    var items = collections[cfg.collection];
    if (!items) return;
    if (typeof items.forEach !== "function") return;

    items.forEach(function (item) {
      if (!item || !item.data) return;
      var name = item.data.name || item.data.title || "";
      var desc = item.data.description || item.data.shortDescription || "";
      index.push({
        name: name,
        description: desc,
        url: item.url || "",
        type: cfg.label,
        icon: cfg.icon,
        collection: cfg.collection,
      });
    });
  });

  // Sort by name
  index.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  return index;
};
