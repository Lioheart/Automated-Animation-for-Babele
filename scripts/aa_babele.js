Hooks.on("aa.getRequiredData", (data) => {    
    console.log("aa.getRequiredData hook fired", data);
    let originalName = getProperty(data.item, "flags.babele.originalName");

    if (!originalName) {
        originalName = getProperty(data.item, "system.identifier");
        originalName = originalName.replaceAll("-", " ");
    }

    if (!originalName) return;

    data.overrideNames.push(originalName);
    // data.overrideNames = [originalName];   
    data.item.name = originalName;
});
