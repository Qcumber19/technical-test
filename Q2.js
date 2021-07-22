function validate_email(email){

    var regex = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{1,20})+@\.[a-zA-Z0-9-]+(?:\.[co.id|id]+)*$/;
    return regex.test(email)
}

console.log(validate_email('qolbyrizky87008@.gmail.co.id'))
console.log(validate_email('qolbyrizky87008@gmail.co.id'))
console.log(validate_email('qolbyrizky87008awdasdwasdasdwa@gmail.co.id'))