let masyvas:number[] = [1, 2, 3];

masyvas.push(2);
masyvas.pop();

for(let i = 0; i < 3; i++) {
    console.log(masyvas[i])
}

masyvas.forEach( item => {
    console.log(item);
})