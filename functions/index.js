const functions = require("firebase-functions");
const { Nuxt } = require("nuxt"); // 中括弧{}は分割代入の書き方。配列から値を取り出して、あるいはオブジェクトからプロパティを取り出して別個の変数に代入することを可能にする
const nuxt = new Nuxt({
  buildDir: "ssr",
  dev: false
}); // todo: new Nuxtとは？

exports.ssr = functions.https.onRequest(async (req, res) => {
  await nuxt.ready();
  return nuxt.render(req, res);
}); // todo: exportsとは？ これは何をやっている？

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
