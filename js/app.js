document.addEventListener('mousemove', e => {
    Object.assign(documentElement, {
        style: `
        --move-x: ${e.clientX}deg;
        --move-y: ${e.clientY}deg;
        `
    })
})