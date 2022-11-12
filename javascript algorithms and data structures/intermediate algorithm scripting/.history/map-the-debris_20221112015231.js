/*
Map the Debris

Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) should return [{name: "sputnik", orbitalPeriod: 86400}].

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].
________________________________________________________________
*/
const log = console.log;
log('ready to solve!')
function orbitalPeriod(arr) {
    // included and stored pi and square root function, as well as an exponential function, rounder, gravitational parameter, and earth's radius: changed GM to mu for the purpose of this exercise.
    const [pi, sr, p, round, mu, earthRadius] = [Math.PI, (num) => Math.sqrt(num), (base, exp) => Math.pow(base, exp), (dec) => Math.round(dec), 398600.4418, 6367.4447];
    // log(round((2*pi)*(sr(p(earthRadius, 3)/mu))));
    log(round((2 * pi) * (sr(p(earthRadius, 3) / mu))))
    return arr;
}

// test
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }])
// should return [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }])
// should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].