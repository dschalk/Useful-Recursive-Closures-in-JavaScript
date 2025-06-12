

var log = console.log

var N = 10;

var Q = N => (1 - 1/N)**N;

log("Q(100000000) is", Q(100000000));

