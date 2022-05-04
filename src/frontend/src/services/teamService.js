import axios from "axios";
import authHeader from "./authHeader";
const API_URL = "http://localhost:8080/teams";


const createTeam = async (name, teamLeaderId, membersIds) => {
    return axios.post(API_URL + "/save", {name, teamLeaderId, membersIds}, {headers: authHeader() });
}

const getTeamTasks = async (teamId) => {
    return axios.get(API_URL + "/getTeamTasks", {headers: authHeader(), params: {teamId: teamId}}).then(res => res.data).catch((error) => console.log(error));
}

const TeamService = {
    createTeam,
    getTeamTasks   
};

export default TeamService;