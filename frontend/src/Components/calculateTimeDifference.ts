export function calculateTimeDifference(starttime:string){
    var startDate = new Date(starttime);
    const timeElapsed = Date.now()
    const currentTime = new Date(timeElapsed)
    return((currentTime.getTime()-startDate.getTime()).toString());
}