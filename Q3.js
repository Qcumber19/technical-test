function convert12to24(time12h){ 
    const [time, mod] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
    
    if (hours === '12'){
        hours = '00';
    }

    if (mod === 'PM') {
        hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`
}

console.log(convert12to24('12:00 PM'))
console.log(convert12to24('12:00 AM'))