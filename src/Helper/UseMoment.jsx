import moment from "moment/moment";


export const getCurrentTimestamp=(timeStamp)=>{
    return moment().format(timeStamp);
}
