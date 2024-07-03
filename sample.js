


const os = require('os')

console.log(os.type())
// this is like to know the type of the os Windows_NT

console.log(os.version())
// this is like to know the type of the verson Windows 10 Home Single Language

console.log(os.freemem()) 
// this is like to know the how much memory is there. 8150581248

console.log(os.cpus())

// this is like to know the about cpus information. 

// cups information

/*
 
[
  {
    model: 'Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz',
    speed: 2112,
    times: {
      user: 8419984,
      nice: 0,
      sys: 4817171,
      idle: 90480484,
      irq: 897937
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz',
    speed: 2112,
    times: {
      user: 4300000,
      nice: 0,
      sys: 1425390,
      idle: 97992203,
      irq: 80937
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz',
    speed: 2112,
    times: {
      user: 8954578,
      nice: 0,
      sys: 2725468,
      idle: 92037562,
      irq: 118906
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz',
    speed: 2112,
    times: {
      user: 4732625,
      nice: 0,
      sys: 1448156,
      idle: 97536796,
      irq: 44140
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz',
    speed: 2112,
    times: {
      user: 6212281,
      nice: 0,
      sys: 2159171,
      idle: 95346109,
      irq: 82484
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz',
    speed: 2112,
    times: {
      user: 4530953,
      nice: 0,
      sys: 1608359,
      idle: 97578265,
      irq: 53390
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz',
    speed: 2112,
    times: {
      user: 5775875,
      nice: 0,
      sys: 2144156,
      idle: 95797562,
      irq: 63359
    }
  },
  {
    model: 'Intel(R) Core(TM) i5-10210U CPU @ 1.60GHz',
    speed: 2112,
    times: {
      user: 5120343,
      nice: 0,
      sys: 1843765,
      idle: 96753453,
      irq: 43484
    }
  }
]

*/

// ========================================================================


console.log(__dirname)
//this will tell the whole diretory(current folder) or full path name. this will give to us.
//D:\2n\node_tutorial


console.log(__filename)
//this will also give the whole directoru and last the file name(current filename) also this will given to us.
//D:\2n\node_tutorial\sample.js