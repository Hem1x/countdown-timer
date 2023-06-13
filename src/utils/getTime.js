export const getTime = (left) => {
    const secondsInDay = 86400;
    const secondsInHour = 3600;
    const secondsInMinute = 60;
    
    const days = Math.floor(left/secondsInDay)
    left = left - (days * secondsInDay )

    const hours = Math.floor(left/secondsInHour)
    left = left - (hours * secondsInHour )

    const minutes = Math.floor(left/secondsInMinute)
    left = left - (minutes * secondsInMinute )

    const seconds = Math.floor(left)

    return {days, hours, minutes, seconds}
}