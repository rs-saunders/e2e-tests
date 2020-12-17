module.exports = {
  launch: {
    //Whether to run browser in headless mode. Defaults to true unless the devtools option is true.
    headless: process.env.HEADLESS !== "false",

    //Slows down Puppeteer operations by the specified amount of milliseconds. Useful so that you can see what is going on.
    slowMo: 300,
  },
};
