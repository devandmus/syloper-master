import Request from "./request"

const getProjects = () =>
    Request({
        url: "api/projects",
        method: "GET",

    }).then((response) =>{
        if (response.status === 200) {
            return res.data;
        }
        return false;
    })


export {
    getProjects,
}