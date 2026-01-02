let currentDate = new Date();
const dayInWeek = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const dayInMumuock = ['Njœêngong',"Fa'à",'Télǎng', 'Ngangà', 'Mbeqgnúá', 'Mbeqlěq', 'Njœêlekœr̄', 'Mbeqńkœó']

function renderCalendar(date) {
    const monthYearElement = document.getElementById('month-year');
    const calendarGridElement = document.getElementById('calendar-grid');
    const dmonth = document.getElementById('month');
    const dmonths = ['Tạ Sang', 'Besangbèpíǽ', 'Besangbètàt', 'Besanglekuā', 'Besangbètå', 'Besăngǹtùògò', 'Besangšîâmbíǽ', 'Besangléfà', 'Besanglepụè', 'Besangléqèm', 'Besangntsôpmọ', 'Besangntsôppíǽ']
    const month = date.getMonth();
    const year = date.getFullYear();


    // date, month and year
    const mday = document.getElementById('Mday')
    const mDay = document.getElementById('mDay')
    function dateMonthYear() {
        // datePosition
        const datePst = ['st', 'nd', 'rd', 'th']
        let pst;
        function datePosition(params) {
            if (params === 1 || params === 21 || params === 31) {
                pst = datePst[0]
            } else if (params === 2 || params === 22) {
                pst = datePst[1]
            } else if (params === 3 || params === 23) {
                pst = datePst[2]
            } else {
                pst = datePst[3]
            }
        }
        datePosition(new Date().getDate())
        mday.innerHTML = `<i>${date.getDate()}<sup>${pst}</sup>,   ${dmonths[date.getMonth()]},   ${date.getFullYear()}</i>`
        mDay.innerHTML = `<i>${date.getDate()}<sup>${pst}</sup>,   ${dmonths[date.getMonth()]},   ${date.getFullYear()}</i>`
        // mDay.innerHTML = `${dayInMumuock[new Date().getDay()]}, <i>${date.getDate()}  <sup>th</sup>,   ${dmonths[date.getMonth()]},   ${date.getFullYear()}</i>`
    }
    dateMonthYear()

    // let dayIndex =
    // mday.textContent = dayInMumuock[new Date().getDay()]

    monthYearElement.textContent = `${date.toLocaleString('default', { month: 'long' })}`;
    const yearFig = document.querySelector('#yearFig').textContent = `${year}`;


    if (monthYearElement.innerText === 'January') {
        dmonth.textContent = dmonths[0];
    }else if (monthYearElement.innerText === 'February') {
        dmonth.textContent = dmonths[1];
    }else if (monthYearElement.innerText === 'March') {
        dmonth.textContent = dmonths[2];
    }else if (monthYearElement.innerText === 'April') {
        dmonth.textContent = dmonths[3];
    }else if (monthYearElement.innerText === 'May') {
        dmonth.textContent = dmonths[4];
    }else if (monthYearElement.innerText === 'June') {
        dmonth.textContent = dmonths[5];
    }else if (monthYearElement.innerText === 'July') {
        dmonth.textContent = dmonths[6];
    }else if (monthYearElement.innerText === 'August') {
        dmonth.textContent = dmonths[7];
    }else if (monthYearElement.innerText === 'September') {
        dmonth.textContent = dmonths[8];
    }else if (monthYearElement.innerText === 'October') {
        dmonth.textContent = dmonths[9];
    }else if (monthYearElement.innerText === 'November') {
        dmonth.textContent = dmonths[10];
    }else{
        dmonth.textContent = dmonths[11];
    }

    const firstDay = new Date(year, month, 1);
    const firstDayOfWeek = firstDay.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
// wishing christmas and new year
    if (currentDate.getDate() === 25 & currentDate.getMonth() === 11) {
        wishx.style = 'display: initial; text-align: center;';
        wishx.innerHTML = '<h2 class="text-red-500 font-bold px-4" style="background: white;">🎉Merry🎅🎄Christmas🎉</h2>'
        console.log(currentDate.getDate());
    }else if (currentDate.getDate() === 1  & currentDate.getMonth() === 0) {
        wishx.style = 'text-align: center;'
        wishx.innerHTML = '<h2 class="text-blue-500 font-bold px-4" style="background: white;">🍾Happy 🥂New 🥳Year🎆</h2>'
    }

    calendarGridElement.innerHTML = '';

    // Add empty cells for days before the first day
    for (let i = 0; i < firstDayOfWeek; i++) {
        const emptyCell = document.createElement('div');
        calendarGridElement.appendChild(emptyCell);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('day');
        dayCell.textContent = day;

        if (day === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
            dayCell.classList.add('today');
            dayCell.innerHTML = day  + '<br>'+dayInWeek[new Date().getDay()];
        }
        
        
        calendarGridElement.appendChild(dayCell);
    }
}
document.querySelector('.n').addEventListener('click',p=>{
    
})
renderCalendar(currentDate);
//  time
// Túh the night. ( lëtúh- by night, at night)
function updateTime() {
    const njie = ['Ndzemèndzémé🌅', 'Tàngexǐk ndéndè☀️', 'Tàngexǐk🌤️', 'Mbodnjœé🌤️', 'Ntsĕrnǳèm🌇', 'Tùh🌒']
    const num = ['Tạ', 'Bèpíǽ', 'Bètàt', 'Lekuā', 'Bètå', 'ǹtùògò', 'šîâmbíǽ', 'Léfà', 'Lepụè', 'Léqèm', 'Tsôpmọ', 'Tsôppíǽ']
    const now = new Date();
    // const r = document.getElementById('time')
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const hours12 = (hours % 12 || 12).toString().padStart(2, '0');
    
    const timeString = `${hours12}:${minutes} ${ampm}, ${dayInWeek[new Date().getDay()]}`;
    
    

    // time under main heading
    if (ampm === 'AM') {
        document.getElementById('am').innerHTML = `${hours12}:${minutes}:${seconds} <span class="period">${njie[0]}</span>`
    } else if (ampm === 'PM' && hours12 <= 2) {
        document.getElementById('am').innerHTML = `${hours12}:${minutes}:${seconds} <span class="period">${njie[2]}</span>`
    }else if (ampm === 'PM' && hours12 > 2 && hours12 <= 4) {
        document.getElementById('am').innerHTML = `${hours12}:${minutes}:${seconds} <span class="period">${njie[3]}</span>`
    }else if (ampm === 'PM' && hours12 > 4 && hours12 <= 6) {
        document.getElementById('am').innerHTML = `${hours12}:${minutes}:${seconds} <span class="period">${njie[4]}</span>`
    }else if (ampm === 'PM' && hours12 === '12') {
        document.getElementById('am').innerHTML = `${hours12}:${minutes}:${seconds} <span class="period">${njie[1]}</span>`
    }else{
        document.getElementById('am').innerHTML = `${hours12}:${minutes}:${seconds} <span class="period">${njie[5]}</span>`
    }

    // actual time
    if (ampm === 'AM') {
        document.getElementById('amp').innerHTML = `${hours12}:${minutes}:${seconds} <span class="period">${njie[0]}</span>`
    } else if (ampm === 'PM' && hours12 <= 2) {
        document.getElementById('amp').innerHTML = `${hours12}:${minutes}:${seconds} <span class="period">${njie[2]}</span>`
    }else if (ampm === 'PM' && hours12 > 2 && hours12 <= 4) {
        document.getElementById('amp').innerHTML = `${hours12}:${minutes}:${seconds} <span class="period">${njie[3]}</span>`
    }else if (ampm === 'PM' && hours12 > 4 && hours12 <= 6) {
        document.getElementById('amp').innerHTML = `${hours12}:${minutes}:${seconds} <span class="period">${njie[4]}</span>`
    }else if (ampm === 'PM' && hours12 === '12') {
        document.getElementById('amp').innerHTML = `${hours12}:${minutes}:${seconds} <span class="period">${njie[1]}</span>`
    }else{
        document.getElementById('amp').innerHTML = `${hours12}:${minutes}:${seconds} <span class="period">${njie[5]}</span>`
    }

// reading time
// -------------------------------Ndzemèndzémé
    function Ndzemèndzémé() {
        if (hours12 === '01' && ampm === 'AM') {
            // console.log(`<b>Read as:</b> Benēq ${num[0]} ${njie[0]}`);
            document.getElementById('read').innerHTML = `Read as: <i class="read"><u>${num[0]}</u> Nēq ${njie[0]}</i>`
        } else if (hours12 === '02' && ampm === 'AM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[1]}</u> ${njie[0]}</i>`
        }
        else if (hours12 === '03' && ampm === 'AM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[2]}</u> ${njie[0]}</i>`
        }
        else if (hours12 === '04' && ampm === 'AM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[3]}</u> ${njie[0]}</i>`
        }
        else if (hours12 === '05' && ampm === 'AM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[4]}</u> ${njie[0]}</i>`
        }
        else if (hours12 === '06' && ampm === 'AM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[5]}</u> ${njie[0]}</i>`
        }
        else if (hours12 === '07' && ampm === 'AM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[6]}</u> ${njie[0]}</i>`
        }
        else if (hours12 === '08' && ampm === 'AM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[7]}</u> ${njie[0]}</i>`
        }
        else if (hours12 === '09' && ampm === 'AM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[8]}</u> ${njie[0]}</i>`
        }
        else if (hours12 === '10' && ampm === 'AM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[9]}</u> ${njie[0]}</i>`
        }
        else if (hours12 === '11' && ampm === 'AM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[10]}</u> ${njie[0]}</i>`
        }else if (hours12 === '12' && ampm === 'PM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[11]}</u> ${njie[1]}</i>`
        }
    }
    Ndzemèndzémé();

//Tàngexǐk
    function Tàngexǐk() {
        if (hours12 === '01' && ampm === 'PM') {
            // console.log(`<b>Read as:</b> Benēq ${num[0]} ${njie[0]}`);
            document.getElementById('read').innerHTML = `Read as: <i class="read"><u>${num[0]}</u> Nēq ${njie[2]}</i>`
        } else if (hours12 === '02' && ampm === 'PM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[1]}</u> ${njie[2]}</i>`
        }
        else if (hours12 === '03' && ampm === 'PM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[2]}</u> ${njie[3]}</i>`
        }
        else if (hours12 === '04' && ampm === 'PM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[3]}</u> ${njie[3]}</i>`
        }
        else if (hours12 === '05' && ampm === 'PM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[4]}</u> ${njie[4]}</i>`
        }
        else if (hours12 === '06' && ampm === 'PM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[5]}</u> ${njie[4]}</i>`
        }
        else if (hours12 === '07' && ampm === 'PM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[6]}</u> ${njie[5]}</i>`
        }
        else if (hours12 === '08' && ampm === 'PM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[7]}</u> ${njie[5]}</i>`
        }
        else if (hours12 === '09' && ampm === 'PM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[8]}</u> ${njie[5]}</i>`
        }
        else if (hours12 === '10' && ampm === 'PM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[9]}</u> ${njie[5]}</i>`
        }
        else if (hours12 === '11' && ampm === 'PM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[10]}</u> ${njie[5]}</i>`
        }else if (hours12 === '12' && ampm === 'AM') {
            document.getElementById('read').innerHTML = `Read as: <i class="read">Benēq <u>${num[11]}</u> ${njie[0]}</i>`
        }
    }
    Tàngexǐk();

    time.textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();

const dev =  document.getElementById('dev')
const nfd =  document.getElementById('nfd')
const nfdC =  document.getElementById('nfdC')
const about =  document.getElementById('about')
const fabout =  document.getElementById('fabout')
const clos =  document.getElementById('close')
const dwn =  document.getElementById('dwn')
const dwnl =  document.getElementById('dwnl')
const  nClose =  document.getElementById('nClose')

// closs 404
function closs(){
    nfd.style = 'display: none;';
    console.log(nfd.style);
}
clos.addEventListener('click', closs);


// about page
function del() {
    nfd.style = 'display: initial;';
    console.log(nfd.classList);
    nfd.classList.add = 'p-5 border';
    nfdC.innerHTML = '<h2 class="font-bold text-gray-600 text-3xl underline">About Page</h2> <br> <p class="text-[1rem] text-gray-600">This website was developed by <b>Ndembeze Kangmoh</b> to ease Time Reading as well as the Date and Day in the Mmuock Leteh Language.</p>';
    setTimeout(closs, 9000);
}
about.addEventListener('click', del);
fabout.addEventListener('click', del);

// ndembeze.com unavailable
dev.addEventListener('click', e =>{
    nfd.style = 'display: initial;'
    nfd.classList.add = 'p-5 border';
    nfdC.innerHTML = '<h2 class="font-bold text-gray-600 text-3xl underline">404</h2> <p class="text-[1rem] text-gray-600"><b>ndembeze.com</b> could not be found. <br> <b>ndembeze.com</b> is currently not available.</p>';
    setTimeout(closs, 9000);
})

// download notification
function dwnc(){
    dwn.style = 'display: none;'
}
setTimeout(e => {
    dwn.style = 'display: initial;';
    dwn.classList.add = 'p-5 border';
    const h2 = '<h2 class="font-bold text-gray-600 text-3xl underline">Leteh Time & K̇alènda.</h2>'
    const p = '<p class="text-[1rem] text-gray-600 my-2"> Click <a href="https://computertips.page.gd/mmuock_/" target="_blank" style="color: blue; text-decoration: underline;">HERE</a> and go to the New and updated website.</p>'
    dwnl.innerHTML = h2 + p;
    setTimeout(dwnc, 7000);
}, 10000)

nClose.addEventListener('click', dwnc)

// download animation
const download = document.getElementById('downloading')
const andr = document.getElementById('andr')
const iph = document.getElementById('iph')
const ipho = document.getElementById('ipho')
const andro = document.getElementById('andro')

function downloading(){
    download.style = 'display: initial;'
    setTimeout(()=>{
        download.style = 'display: none;'
    },5000)
}

andr.addEventListener('click', downloading)
iph.addEventListener('click', downloading)
ipho.addEventListener('click', downloading)

andro.addEventListener('click', downloading)



