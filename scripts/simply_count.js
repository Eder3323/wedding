    var d = new Date(new Date().getTime() + 200 * 120 * 120 * 2000);
    simplyCountdown('.simply-countdown-one', {
        year: 2024,
        month: 2,
        day: 17,
        words: { //words displayed into the countdown
            days: { singular: 'Dia', plural: 'Días' },
            hours: { singular: 'Hora', plural: 'Horas' },
            minutes: { singular: 'Minuto', plural: 'Minutos' },
            seconds: { singular: 'Segundo', plural: 'Segundos' }
        },
    });