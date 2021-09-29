import * as views from "./views";

export default () => `
  ${views["Home"]()}
  ${views["Gallery"]()}
  ${views["Bio"]()}
  `;
