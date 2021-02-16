module.exports = function toReadable (number) {

  let numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let result = '';

  if (number.toString().length === 3) {
    result += numbers[Math.trunc(number / 100)] + ' hundred';
    number -= Math.trunc(number / 100) * 100;
    if (number === 0) {
      return result;
    }
  }

  if (number.toString().length === 2) {
    if (number < 20) {
      result += ' ' + numbers[number];
      return result.trim();
    } else {
      result += ' ' + dozens[Math.trunc(number / 10) - 2];
      number -= Math.trunc(number / 10) * 10;
      if (number === 0) {
        return result.trim();
      }
    }
  }

  if (number.toString().length === 1) {
    result += ' ' + numbers[number];
    return result.trim();
  }
}
