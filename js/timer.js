
    let deadline = '2020-02-19';

    function getTimeRemaining(endtime) {

        let total = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((total/1000) % 60), 
            minutes = Math.floor((total/1000/60) % 60), 
            hours = Math.floor((total/(1000*60*60)));

        return {
            'total' : total,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };                     

    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            if (t.hours < 10) {
                hours.textContent = '0' + t.hours;
            } else {
                hours.textContent = t.hours;
            }

            if (t.minutes < 10) {
                minutes.textContent = '0' + t.minutes;
            } else {
                minutes.textContent = t.minutes;
            }

            if (t.seconds < 10) {
                seconds.textContent = '0' + t.seconds;
            } else {
                seconds.textContent = t.seconds;
            }
            
            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

        
    }

    setClock('timer', deadline);
