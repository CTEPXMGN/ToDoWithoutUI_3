const list = [ 
    { name: 'create a post', status: 'in progress', priority: 'low' }, 
    { name: 'test', status: 'done', priority: 'high' },
];
const STATUS = {
    TO_DO: 'to do',
    IN_PROGRESS: 'in progress',
    DONE: 'done',
};
const PRIORITY = {
    HIGH: 'high',
    LOW: 'low',
};
// Добавляем задачу
function addTask(task, status, priority) {
    let newTask = {};

    newTask.name = task;
    newTask.status = status;
    newTask.priority = priority;

    list.push(newTask);
};
// Меняем статус задачи
function changeStatus(task, status) {
    let result = list.map(function(item) {
        if (item.name === task) {
            item.status = status;
        };
    });

    return result;
};
// Меняем приоритетность задачи
function changePriority(task, priority) {
    let result = list.map(function(item) {
        if (item.name === task) {
            item.priority = priority;
        };
    });

    return result;
};
// Удаляем задачу
function deleteTask(task) {
    
    let resultIndex = list.findIndex(item => item.name == task)

    if (resultIndex === -1) {
        console.log('Такой задачи не существует.');
    } else {
        return list.splice(resultIndex, 1);
    };
};
// Выводим список задач в консоль
function showList() {
    let toDo = 'To do: \n';
    let inProgress = 'In progress: \n';
    let done = 'Done: \n';

    list.forEach(function(item) {
        for (let key in item) {
            if (item[key] === STATUS.IN_PROGRESS) {
                inProgress = inProgress + '  ' + item.name + '\n';
            }
            if (item[key] === STATUS.DONE) {
                done = done + '  ' + item.name + '\n';
            }
            if (item[key] === STATUS.TO_DO) {
                toDo = toDo + '  ' + item.name + '\n';
            };
        };
    });
    let result = toDo + inProgress + done;
                
    return console.log(result);
};

addTask('drink coffee', STATUS.IN_PROGRESS, PRIORITY.HIGH);
addTask('have a walk', STATUS.IN_PROGRESS, PRIORITY.HIGH);
addTask('to run', STATUS.TO_DO, PRIORITY.LOW);
addTask('to make a bed', STATUS.TO_DO, PRIORITY.LOW);
changeStatus('drink coffee', STATUS.DONE);
changePriority('have a walk', PRIORITY.LOW);
deleteTask('create a post');
showList();
