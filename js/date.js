
    const DateTime = easepick.DateTime;
    const bookedDates = [
        '2024-02-02',
        ['2024-02-06', '2024-02-11'],
        '2024-02-18',
        '2024-02-19',
        '2024-02-20',
        '2024-02-25',
        '2024-02-28',
    ].map(d => {
        if (d instanceof Array) {
          const start = new DateTime(d[0], 'YYYY-MM-DD');
          const end = new DateTime(d[1], 'YYYY-MM-DD');

          return [start, end];
        }

        return new DateTime(d, 'YYYY-MM-DD');
    });
    const picker = new easepick.create({
      element: document.getElementById('datepicker'),
      css: [
      'css/index1.css',
        'https://easepick.com/css/demo_hotelcal.css',
      ],
      plugins: ['RangePlugin', 'LockPlugin'],
      RangePlugin: {
        tooltipNumber(num) {
          return num - 1;
        },
        locale: {
          one: 'days',
          other: 'days',
        },
      },
      LockPlugin: {
        minDate: new Date(),
        minDays: 2,
        inseparable: true,
        filter(date, picked) {
          if (picked.length === 1) {
            const incl = date.isBefore(picked[0]) ? '[)' : '(]';
            return !picked[0].isSame(date, 'day') && date.inArray(bookedDates, incl);
          }

          return date.inArray(bookedDates, '[)');
        },
      }
    });