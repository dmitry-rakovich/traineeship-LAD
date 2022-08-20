let str = `Старший братец ПОНЕДЕЛЬНИК –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

ВТОРНИК следует за братом
у него идей богато.

А потом СРЕДА-сестрица,
не пристало ей лениться.

Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.

ПЯТНИЦА-сестра сумела
побыстрей закончить дело.

Предпоследний брат СУББОТА
не выходит на работу.

В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье
`;
let obj = {
    ПОНЕДЕЛЬНИК: "MONDAY", 
    ВТОРНИК: "TUESDAY",
    СРЕДА: "WEDNESDAY",
    ЧЕТВЕРГ: "THURSDAY",
    ПЯТНИЦА: "FRIDAY",
    СУББОТА: "SATURDAY",
    ВОСКРЕСЕНЬЕ: "SUNDAY",
}

function replaceDay (str) {
    return str
    .split(" ")
    .map(item => {
        for (let key in obj) {
            if (item.includes(key)) {
               return item.replace(key, obj[key])
            }
        } return item
    })
    .join(" ")
}
document.querySelector('.str').innerText = `${str}`
document.querySelector('.new-str').innerText = `${replaceDay(str)}`
// console.log(replaceDay(str))