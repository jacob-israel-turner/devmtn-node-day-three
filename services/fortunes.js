var fortunes = [
  'Yes',
  'No',
  'Maybe',
  'When Hell freezes over',
  'Is the Pope Catholic?',
  'Try again!',
  'Tomorrow!'
]

module.exports = {
  fortunes: fortunes,
  getRandom: function () {
    var index = Math.floor(Math.random() * fortunes.length);
    return fortunes[index];
  }
}
