const sidebar = document.getElementById('sidebar');
const collapse = document.getElementById('collapse');
const sidebarHeader = document.getElementById('sidebarHeader');

const itemApplications = document.getElementById('item-applications');
const itemClients = document.getElementById('item-clients');
const itemContracts = document.getElementById('item-contracts');
const itemTasks = document.getElementById('item-tasks');
const itemMessages = document.getElementById('item-messages');
const itemFiles = document.getElementById('item-files');
const itemReports = document.getElementById('item-reports');
const itemSettings = document.getElementById('item-settings');
const itemAuditLog = document.getElementById('item-audit-log');

function wrap() {
    sidebarHeader.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_21_6)"><path d="M12 3L21 12L12 21L3 12L12 3Z" stroke="#60A5FA" stroke-width="3"/><path d="M12 8L16 12L12 16L8 12L12 8Z" fill="#60A5FA"/></g><defs><clipPath id="clip0_21_6"><rect width="24" height="24" fill="white"/></clipPath></defs></svg>';
    collapse.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M9.16667 5.83331L5 9.99998L9.16667 14.1666" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 5.83331L10.8333 9.99998L15 14.1666" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    const items = [itemApplications, itemClients, itemContracts, itemTasks, 
                   itemMessages, itemFiles, itemReports, itemSettings, itemAuditLog];
    items.forEach(item => {
        item.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><circle cx="4" cy="4" r="3.3" stroke="#93A4BD" stroke-width="1.4"/></svg>';
        item.classList.add('sidebar__item--disabled');
    });

    sidebar.classList.add('sidebar--disabled');
    collapse.classList.add('sidebar__collapse--disabled')

}
function unwrap() {
    sidebarHeader.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><g clip-path="url(#clip0_21_6)"><path d="M12 3L21 12L12 21L3 12L12 3Z" stroke="#60A5FA" stroke-width="3"/><path d="M12 8L16 12L12 16L8 12L12 8Z" fill="#60A5FA"/></g><defs><clipPath id="clip0_21_6"><rect width="24" height="24" fill="white"/></clipPath></defs></svg><span class="sidebar__header-text">Demo Admin</span>';
    collapse.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M9.16667 5.83331L5 9.99998L9.16667 14.1666" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 5.83331L10.8333 9.99998L15 14.1666" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg><p class="sidebar__collapse-text">Свернуть меню</p>';
    
    const itemsData = [
        { element: itemApplications, text: 'Заявки', counter: '99+' },
        { element: itemClients, text: 'Клиенты', counter: null },
        { element: itemContracts, text: 'Договоры', counter: null },
        { element: itemTasks, text: 'Задачи', counter: null },
        { element: itemMessages, text: 'Сообщения', counter: null },
        { element: itemFiles, text: 'Файлы', counter: null },
        { element: itemReports, text: 'Отчёты', counter: null },
        { element: itemSettings, text: 'Настройки', counter: null },
        { element: itemAuditLog, text: 'Журнал аудита', counter: null }
    ];
    
    itemsData.forEach(({ element, text, counter }) => {
        let html = '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none"><circle cx="4" cy="4" r="3.3" stroke="#93A4BD" stroke-width="1.4"/></svg>';
        html += `<p class="sidebar__item-text">${text}</p>`;
        if (counter) {
            html += `<span class="sidebar__counter">${counter}</span>`;
        }
        element.innerHTML = html;
        element.classList.remove('sidebar__item--disabled');
    });
    
    sidebar.classList.remove('sidebar--disabled');
    collapse.classList.remove('sidebar__collapse--disabled')

}

function toggleSidebar() {
    if (sidebar.classList.contains('sidebar--disabled')) {
        unwrap();
    } else {
        wrap();
    }
}

collapse.addEventListener('click', toggleSidebar);

const item = document.getElementById('item-applications');

if (item.classList.contains('sidebar__counter--active')) {
    
}