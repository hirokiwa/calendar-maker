const Make_calendar = (year:number, month:number):number[][] => {
    let calendar:number[][] = []                //カレンダー
    const first_day = new Date(year, month, 1); //任意の月の1日を取得
    let week:number[] = []                      //週生成用

    // first week========
    for(let i = first_day.getDay(); i < 7; i++){
        week.push(i - first_day.getDay() + 1)
    }

    const end_last_month = new Date(first_day.getFullYear(), first_day.getMonth(), 0)
    for(let i = 0; i < first_day.getDay(); i++){
        week.unshift( end_last_month.getDate() - i)
    }
    calendar.push(week)

    // last week============
    const last_day = new Date(first_day.getFullYear(), first_day.getMonth() + 1, 0)
    let last_week:number[] = []

    for(let i = 0; i <= last_day.getDay(); i++){
        last_week.unshift(last_day.getDate() - i)
    }

    if(last_day.getDay() !== 6){
        const begin_next_month = new Date(first_day.getFullYear(), first_day.getMonth() + 1, 1)
        for(let i = 0; i < 7 - begin_next_month.getDay(); i++){
            last_week.push( begin_next_month.getDate() + i)
        }
    }

    // middle week===========
    for(let i = 0; i < 5; i++){
        week = []
        for(let j = 0; j < 7 ; j++){
            week.push((8 - first_day.getDay() + j) + 7 * i)
        }
        if(week[0] !== last_week[0]){
            calendar.push(week)
        }else{
            calendar.push(last_week)
            break
        }
    }
    // ======================

    return calendar
}

export default Make_calendar