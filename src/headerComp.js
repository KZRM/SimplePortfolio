function makeHeader(title) {
    const header = document.createElement('div');
    header.className = 'header';
    header.style = "display: flex; height: 40px; width: 100%; align-items: center; border-top: 1px solid rgba(255, 255, 255, 0.1);";
    header.innerHTML = `
        <div class="vertical-stripes" style="flex:3; height: 5px;"></div>
        <h2 class="title">${title}</h2>
        <div class="vertical-stripes" style="flex:3; height: 5px;"></div>
    `;
    return header;
}

// Option 1: Populate predefined containers
document.querySelectorAll('.header-container').forEach(container => {
    const title = container.dataset.title;
    container.appendChild(makeHeader(title));
});

// Option 2: Dynamic creation (uncomment to use instead)
// const titles = ['EXPERIENCE', 'SKILLS', 'PROJECTS'];
// const root = document.getElementById('root');
// titles.forEach(title => root.appendChild(makeHeader(title)));