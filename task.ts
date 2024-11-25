// const CatBreads = {
//     Persian: "Persian",
//     Cat: "Cat",
// } as const


// const catBreed1 = CatBreads.Cat;

// function typeData<TGeneric>(data: TGeneric){
//     console.log(`hello ${data}`);   
// }
// typeData<boolean>(true)

// type User = {
//     name: string,
//     age: number,
// }

// type Admin = {
//     name: string,
//     age: number,
//     adminAccess: boolean,
// }

// type GetUserProperties<TType extends 'user' | 'admin'> = TType extends 'user' ? User : Admin

// const userData: GetUserProperties<'user'> = {
//     name: "Darwin",
//     age: 20,
// }

// const adminData: GetUserProperties<'admin'> = {
//     name: "Jordan",
//     age: 23,
//     adminAccess: true
// }

// const getPropertiesData = <TType extends 'user' | 'admin'>(userType: TType) => {
//     return {} as GetUserProperties<TType>;
// }

// const dataAdmin = getPropertiesData('admin')
// adminData.adminAccess;
// const userAdmin = getPropertiesData('user')
// userAdmin.name;

/*
type User = {
    name: string,
    age: number,
}

interface Admin extends User {
    tasks: Task | Task[],
}

type Task = {
    id: number,
    description: string,
    status: TaskStatus,
}

enum TaskStatus {
    DONE = "DONE",
    INPROGRESS = "IN-PROGRESS",
}

type GenericUserTypes<TUsers extends 'user' | 'admin'> = TUsers extends 'user' ? User : Admin;

const getUserData: GenericUserTypes<'user'> = {
    name: "darwin",
    age: 2,
}

const getAdminData: GenericUserTypes<'admin'> = {
    name: "darwin",
    age: 2,
    tasks: {
        id: 1,
        description: "Eating",
        status: TaskStatus.DONE,
    } 
}

console.log(getAdminData);

function editTask(user: User | Admin, taskId: number, newStatus: TaskStatus){
    if(!("tasks" in user)){
        console.log("Permission Denied");
        return;
    }

    const admin = user as Admin;

    if(admin.tasks){
        if(Array.isArray(admin.tasks)){
            const task = admin.tasks.find(task => task.id === taskId)
            if(task){
                task.status = newStatus;
                console.log(taskId + " is being edited and the new status is: " + newStatus);
            } else {
                console.log("Task Id is not found");
            } 
        } else {
            if(admin.tasks.id === taskId){
                admin.tasks.status = newStatus;
                console.log(taskId + " is being edited and the new status is: " + newStatus);
            } else {
                console.log("Task Id is not found");
            }
        }
    } else{
        console.log("No tasks found in admin");
    }
}

console.log(getUserData);
console.log(getAdminData);

editTask(getAdminData, 1, TaskStatus.INPROGRESS);
editTask(getUserData, 1, TaskStatus.DONE)
*/

// type User = {
//     name: string,
//     age: number,
// }

// interface Admin extends User {
//     tasks: Task | Task[],
// }

// type Task = {
//     id: number,
//     description: string,
//     status: TaskStatus,
// }

// enum TaskStatus {
//     DONE = "DONE",
//     INPROGRESS = "IN-PROGRESS",
// }

// type GenericUserTypes<TUsers extends 'user' | 'admin'> = TUsers extends 'user' ? User : Admin;

// const getUser: GenericUserTypes<'user'> = {
//     name: "Darwin",
//     age: 30,
// }

// const getAdmin: GenericUserTypes<'admin'> = 
//     {
//         name: "Darwin",
//         age: 30,
//             tasks: [
//                 {
//                     id: 1,
//                     description: "Coding",
//                     status: TaskStatus.DONE,
//                 },
//                 {
//                     id: 2,
//                     description: "Food",
//                     status: TaskStatus.INPROGRESS,
//                 }
//             ]
//     }
        

// function editTask(user: User | Admin, taskId: number, newStatus: TaskStatus){
//     if(!("tasks" in user)){
//         console.log("Permission Denied not an Admin");
//     }

//     const admin = user as Admin

//     if(admin.tasks){
//         if(Array.isArray(admin.tasks)){
//             const task = admin.tasks.find((task) => task.id === taskId)
//             if(task){
//                 console.log(taskId + " task id is edited to " + newStatus);   
//             } else {
//                 console.log("Task Id is not found");
//             }
//         } else {
//             if(admin.tasks.id === taskId){
//                 admin.tasks.status = newStatus;
//                 console.log(taskId + " is being edited and the new status is: " + newStatus);
//             } else {
//                 console.log("No tasks id found");
//             }
//         }
//     } else {
//         console.log("No task found");
//     }
// }

// editTask(getAdmin, 1, TaskStatus.INPROGRESS)
// editTask(getUser, 2, TaskStatus.DONE)


interface User{
    name: string,
    age: number,
}

interface Admin extends User{
    tasks: Task | Task[],
}

enum TaskStatus{
    DONE = "DONE",
    INPROGRESS = "IN-PROGRESS",
}

interface Task{
    id: number,
    description: string,
    status: TaskStatus,
}

type GenericUserTypes<TUsers extends 'user' | 'admin'> = TUsers extends "user" ? User : Admin;

const getUser: GenericUserTypes<'user'> = {
    name: "Darwin",
    age: 25,
}

const getAdmin: GenericUserTypes<'admin'> = {
    name: "I'm an Admin bitch",
    age: 21,
    tasks: {
        id: 1,
        description: "Fooding",
        status: TaskStatus.INPROGRESS
    }
}

function editTask(user: User | Admin, taskId: number, newStatus: TaskStatus){
    if(!("tasks" in user)){
        console.log("Permission Denied");
    }

    const admin = user as Admin;

    if(admin.tasks){
        if(Array.isArray(admin.tasks)){
            const task = admin.tasks.find((task) => task.id === taskId)
            if(task){
                console.log(taskId + "Updated new status: " + newStatus);
            } else{
                console.log("no task id found");
            }
        } else{
            if(admin.tasks.id === taskId){
                console.log(taskId + "Updated new status: " + newStatus);
            } else{
                console.log("no task id found"); 
            }
        }
    } else{
        console.log("no task found");
    }
}


editTask(getUser, 1, TaskStatus.DONE)
editTask(getAdmin, 1, TaskStatus.INPROGRESS)
editTask(getAdmin, 2, TaskStatus.DONE)