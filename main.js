function fire() {
    const data = {
        'Overview': '概况',
        'Summary': '摘要',
        'Dashboards': '大盘',
        'Wiki': '维基',
        'Boards': '看板',
        'Work items': '工作',
        'Backlogs': '待办',
        'Sprints': '冲刺',
        'Queries': '查询',
        'Repos': '代码库',
        'Test Plans': '测试计划',
    }

    const elements = ['div', 'span'];

    const navigationSection = document.querySelector('.navigation-section');
    if (navigationSection) {
        for (const element of elements) {
            navigationSection.querySelectorAll(element).forEach((el, idx) => {
                for (const k in data) {
                    if (el.innerHTML == k) {
                        el.innerHTML = data[k];
                    }
                }
            });
        }
    }

    const boltPortalHost = document.querySelector('.bolt-portal-host');
    if (boltPortalHost) {
        for (const element of elements) {
            boltPortalHost.querySelectorAll(element).forEach((el, idx) => {
                for (const k in data) {
                    if (el.innerHTML == k) {
                        el.innerHTML = data[k];
                    }
                }
            });
        }
    }
}

setInterval(() => {
    fire();
}, 200);
