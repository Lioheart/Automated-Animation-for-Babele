const { getProperty } = foundry.utils;

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());

Hooks.on("aa.getRequiredData", (data) => {
    console.log("aa.getRequiredData hook fired", data);

    if (!data?.item) return;

    let originalName = getProperty(data.item, "flags.babele.originalName");

    if (!originalName) {
        const identifier = getProperty(data.item, "system.identifier");

        if (typeof identifier === "string" && identifier.length) {
            originalName = capitalize(identifier.replaceAll("-", " "));
        }
    }

    if (!originalName) return;

    if (!Array.isArray(data.overrideNames)) {
        data.overrideNames = [];
    }

    data.overrideNames.push(originalName);
});