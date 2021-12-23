const dd = document.querySelector('#day')
const hh = document.querySelector('#hour')
const mm = document.querySelector('#minute')
const ss = document.querySelector('#second')

const dayInput = document.querySelector('.days')
const hourInput = document.querySelector('.hours')
const minuteInput = document.querySelector('.minutes')
const secondInput = document.querySelector('.seconds')

const btn = document.querySelector('.btn')

const musicBtn = document.querySelector('.btn-music')

const audio = document.querySelector('.audio')


let days, hours, minutes, seconds

function playMusic() {
    musicBtn.style.display = 'block'
    audio.play()
    
}

function deleteMusic() {
    musicBtn.style.display = 'none'
    audio.pause()
}

function resetCountDownValues() {

    days= '00'
    hours = '00'
    minutes = '00'
    seconds = '00'

    dayInput.value = null
    hourInput.value = null
    minuteInput.value = null
    secondInput.value = null


}

function reset() {
    btn.textContent= 'Start'
    btn.style.background = 'rgb(39, 172, 172)'
    btn.setAttribute('onclick', 'countDown()')

    resetCountDownValues()

}

function startCountDown (day, hour, minute, second) {
    let dayConst = 86400
    let hourConst = 3600
    let minuteConst = 60

    let totalSecond = day * dayConst + hour * hourConst + minute * minuteConst + second * 1;

    let timeCount = setInterval(() => {
        let totalTime = totalSecond--;
        let time = totalTime

        days = Math.floor(totalTime / dayConst);
        totalTime = totalTime % dayConst;

        hours = Math.floor(totalTime / hourConst);
        totalTime = totalTime % hourConst;


        minutes = Math.floor(totalTime / minuteConst);
        totalTime = totalTime % minuteConst;


        seconds = Math.floor(totalTime);


        if (days < 10) {
            days = '0' + days;
        }

        if (hours < 10) {
            hours = '0' + hours;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
        }

        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        
        if(time == 0) {
            playMusic()
            clearInterval(timeCount);
            reset()
        }

        if(totalTime < 0) {
            clearInterval(timeCount);
            reset()
        }

        if (btn.getAttribute('onclick') === 'countDown()') {
            clearInterval(timeCount);
            reset() 
        }

        dd.textContent = days 
        hh.textContent = hours
        mm.textContent = minutes
        ss.textContent = seconds

        
    },1000)
}

function countDown() {
    const day = dayInput.value
    const hour = hourInput.value
    const minute = minuteInput.value
    const second = secondInput.value

    if(day == '' && hour == '' && minute == '' && second == '') {
        alert('Please enter input ')
    } else {
        btn.textContent = 'Reset'
        btn.style.background = 'orange'
        btn.setAttribute('onclick', 'reset()')


        startCountDown(day, hour, minute, second)
        
    }
}