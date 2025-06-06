import fadhila from '../assets/fadhila.png'
import fauni from '../assets/fauni.png'
import lili from '../assets/lili.png'


export const users = [
  {
    name: 'Unassigned Shifts',
    shift: '0',
    bar: '0'
  },
  {
    name: 'Fadhila Puspasari',
    icon: fadhila,
    shift: '0',
    bar: '0'
  },
  {
    name: 'Fauni Ambarsari',
    icon: fauni,
    shift: '12:00',
    bar: '2'
  },
  {
    name: 'Lili Hougton',
    icon: lili,
    shift: '42:00',
    bar: '7'
  }
]

function getFormattedWeek(startDateStr) {
  const startDate = new Date(startDateStr);

  return Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'numeric',
      day: 'numeric',
    });
  });
}

export const week = getFormattedWeek('2025-06-02')

export const colors = [
  "#01AB41", "#FF8B00", "#EF4E46", "#6F94D3",
  "#F9C0BD", "#C7DC01", "#DDE1B7", "#E4CC84"
];