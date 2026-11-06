(function () {
  function closeAll(except) {
    document.querySelectorAll('.navex-select.open').forEach((select) => {
      if (select !== except) select.classList.remove('open');
    });
  }

  function enhanceSelect(nativeSelect) {
    if (nativeSelect.dataset.enhanced === 'true') return;
    nativeSelect.dataset.enhanced = 'true';

    const wrapper = document.createElement('div');
    wrapper.className = `navex-select${nativeSelect.classList.contains('control-full') ? ' control-full' : ''}`;

    const trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'navex-select-trigger';
    trigger.textContent = nativeSelect.options[nativeSelect.selectedIndex]?.textContent || 'Selecionar';

    const menu = document.createElement('div');
    menu.className = 'navex-select-menu';

    Array.from(nativeSelect.options).forEach((option, index) => {
      const item = document.createElement('button');
      item.type = 'button';
      item.className = `navex-select-option${index === nativeSelect.selectedIndex ? ' active' : ''}`;
      item.textContent = option.textContent;
      item.addEventListener('click', () => {
        nativeSelect.selectedIndex = index;
        trigger.textContent = option.textContent;
        menu.querySelectorAll('.navex-select-option').forEach((el) => el.classList.remove('active'));
        item.classList.add('active');
        wrapper.classList.remove('open');
        nativeSelect.dispatchEvent(new Event('change', { bubbles: true }));
      });
      menu.appendChild(item);
    });

    trigger.addEventListener('click', () => {
      const willOpen = !wrapper.classList.contains('open');
      closeAll(wrapper);
      wrapper.classList.toggle('open', willOpen);
    });

    nativeSelect.classList.add('native-select-hidden');
    nativeSelect.parentNode.insertBefore(wrapper, nativeSelect.nextSibling);
    wrapper.appendChild(trigger);
    wrapper.appendChild(menu);
  }

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.navex-select')) closeAll();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeAll();
  });

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('select').forEach(enhanceSelect);
  });
})();
