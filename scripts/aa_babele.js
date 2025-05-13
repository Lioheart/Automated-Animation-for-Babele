Hooks.on("aa.getRequiredData", (data) => {
    const originalName = data.item.flags.babele.originalName;
    data.overrideNames.push(originalName);
})