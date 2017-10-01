process.on('exit', (code) => {
  setTimeout(() => {
    console.log('This will not run');
  }, 0);
});