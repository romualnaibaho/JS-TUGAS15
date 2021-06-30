function hitung_sisi_miring(tegak, datar){

    console.log('Nilai AB :', datar);
    console.log('Nilai BC :', tegak);

    let hasil = Math.sqrt((Math.pow(tegak, 2)) + (Math.pow(datar, 2)));

    return hasil;
}

var AB = 8, BC = 6;

console.log('Panjang sisi AC pada segitiga siku-siku tersebut adalah :', hitung_sisi_miring(BC, AB), 'cm');