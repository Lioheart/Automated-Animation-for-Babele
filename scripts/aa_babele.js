Hooks.on("aa.getRequiredData", (data) => {    
    const originalName = getProperty(data.item, "flags.babele.originalName");
    if (!originalName) return;

    data.overrideNames.push(originalName);
    // data.overrideNames = [originalName];   
    data.item.name = originalName;
});
