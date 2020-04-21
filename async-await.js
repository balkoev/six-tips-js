const random = () => {
    return Promise.resolve(Math.random())
}

'Плохой код 💩'

const sumRandomAsyncNums = () => {
    let first;
    let second;
    let third;

    return random()
        .then(v => {
            second = v;
            return random();
        })
        .then(v => {
            third = v;
            return first + second + third
        })
        .then(v => {
            console.log(`Result ${v}`)
        });
}

'Хороший код ✅'

const sumRandomAsyncNums = async() => {

    const first = await random();
    const second = await random();
    const third = await random();

    console.log(`Result ${first + second + third}`);
}