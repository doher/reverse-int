module.exports = function reverse(n) {
    n = Math.sqrt(Math.pow(n, 2));

    let result = +(n + '').split('').reverse().join('');

    return result;
}
