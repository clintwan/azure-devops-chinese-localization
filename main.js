function fire() {
    const commonData = {
        'Project settings': '项目设置',
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
        'Recently updated': '最新',
        'New Work Item': '新工作',
        'Recycle Bin': '回收站',
        'Feature': '功能',
        'Task': '任务',
        'User Story': '用户故事',
        'User Stories': '用户故事',
        'Features': '功能',
        'Backlog': '待办',
        'View as Backlog': '待办',
        'Board': '看板',
        'View as Board': '看板',
        'Planning': '计划',
        'Taskboard': '看板',
        'Capacity': '产能',
        'New Sprint': '新冲刺',
        'New item': '新增',
    }

    const elements = ['div', 'span', 'h3'];

    for (const element of elements) {
        document.querySelectorAll(element).forEach((el, idx) => {
            for (const k in commonData) {
                if (el.innerHTML == k) {
                    el.innerHTML = commonData[k];
                }
            }
        });
    }
}

setInterval(() => {
    fire();
}, 500);
