export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let i = 0;
    let valueLast = 0;
    let valueNext = 0;
    while (i < str.length) {
        switch (str[i]) {
            case 'I': {
                valueNext = 1;
                break;
            }
            case 'V': {
                valueNext = 5;
                break;
            }
            case 'X': {
                valueNext = 10;
                break;
            }
            case 'L': {
                valueNext = 50;
                break;
            }
            case 'C': {
                valueNext = 100;
                break;
            }
            case 'D': {
                valueNext = 500;
                break;
            }
            case 'M': {
                valueNext = 1000;
                break;
            }
        }
        if (valueLast < valueNext) {
            result = result - 2 * valueLast + valueNext;
        } else result += valueNext;
        if (i === 0) {
            result = valueNext;
        }
        valueLast = valueNext;
        i++;
    }
    return result;
}
