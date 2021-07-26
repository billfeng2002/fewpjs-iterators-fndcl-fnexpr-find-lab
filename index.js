
function superbowlWin(objects){
    let winning=objects.find((obj)=> obj.result=="W")
    if(winning){
        return winning.year
    }else{
        return winning
    }
}