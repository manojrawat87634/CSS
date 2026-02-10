const getData = () => {
    console.log('this is my js');

    console.log([{
        name: "manoj",
        email: "manoj@gmail.com"
    }]);

    fetch('https://munnapassword.pythonanywhere.com/contact/').then((value) => {
        return value.json()
    }).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err);
    }).finally(() => {

    })
}

export { getData };