const FIVE_SECONDS = 5 * 1000;
const startedAt = Date.now();

// Sleep for 5 seconds
let diff;
while ((diff = Date.now() - startedAt) < FIVE_SECONDS) {
    console.log(diff);
}

console.log("5 seconds elapsed");
