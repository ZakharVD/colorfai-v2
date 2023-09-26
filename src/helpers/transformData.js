export function transformDataToHEX(data) {
    let arrayOfColors = [];
    if (data === undefined) {
        return;
    } else {
        data.map((obj) => {
            arrayOfColors.push(obj.raw_hex);
        })
    }
    return arrayOfColors;
} 