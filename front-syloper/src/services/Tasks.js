import Request from "./request";

const getTasks = () => 
    Request({
        url: 'api/tasks/get',
        method: 'GET',
    }).then((response) =>{
        if (response.status === 200) {
            return res.data;
        }
        return false;
    })

const putTasks = (data) => 
    Request({
        url: 'api/tasks/put',
        data,
        method: 'PUT',
    }).then((response) =>{
        if (response.status === 200) {
            return res.data;
        }
        return false;
    })

const updateTasks = (data) => 
    Request({
        url: 'api/tasks/put',
        data,
        method: 'PUT',
    }).then((response) =>{
        if (response.status === 200) {
            return res.data;
        }
        return false;
    })

const deleteTasks = (data) => 
    Request({
        url: 'api/tasks/put',
        data,
        method: 'DELETE',
    }).then((response) =>{
        if (response.status === 200) {
            return res.data;
        }
        return false;
    })


export default {
    getTasks,
    putTasks,
    updateTasks,
    deleteTasks,
}