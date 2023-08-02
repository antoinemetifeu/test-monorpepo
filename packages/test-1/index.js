class Logger {
  log(message) {
    console.log('main');
  }
}

function main() {
  const logger = new Logger();

  logger.log('main');
}

main();
