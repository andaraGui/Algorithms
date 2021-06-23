for (let i = 0; i <= 2; i += 0.2) {
    for (let j = (i + 1); j <= (i + 3) ; j++){
        i = Number(i.toFixed(1));
        j = Number(j.toFixed(1));
        console.log('I=' + i+ ' J=' + j);
    }
}
