const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
;

Hooks.on("aa.getRequiredData", (data) => {
    console.log("aa.getRequiredData hook fired", data);
    let originalName = getProperty(data.item, "flags.babele.originalName");

    if (!originalName) {
        originalName = getProperty(data.item, "system.identifier");
        originalName = capitalize(originalName.replaceAll("-", " "));
    }

    if (!originalName) return;

    data.overrideNames.push(originalName);
});
