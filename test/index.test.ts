import { describe, expect, it } from "vitest";

import minify from "../src/index";

const url = "https://rubiin.vercel.app";

describe("should get a shortened url", () => {
  it("should get shortened url with is.gd", async () => {
    const response = await minify(url, { provider: "isgd" });
    expect(response.shortUrl).toMatch(/^https:\/\/is.gd\//);
  });

  it("should get shortened url with v.gd", async () => {
    const response = await minify(url, { provider: "vgd" });
    expect(response.shortUrl).toMatch(/^https:\/\/v.gd\//);
  });

  it("should get shortened url with 4h.net", async () => {
    const response = await minify(url, { provider: "4hnet" });
    expect(response.shortUrl).toMatch(/^https:\/\/4h.net\//);
  });

  it("should get shortened url with rb.gy", async () => {
    const response = await minify(url, { provider: "rbgy" });
    expect(response.shortUrl).toMatch(/^https:\/\/rb.gy\//);
  });

  it("should get shortened url with vurl.com", async () => {
    const response = await minify(url, { provider: "vurl" });
    expect(response.shortUrl).toMatch(/^https:\/\/vurl.com\//);
  });

  it("should get shortened url with haha.se", async () => {
    const response = await minify(url, { provider: "haha" });
    expect(response.shortUrl).toMatch(/^https:\/\/haha.se\//);
  });

  it("should get shortened url with pwm.se", async () => {
    const response = await minify(url, { provider: "pwm" });
    expect(response.shortUrl).toMatch(/^https:\/\/pwm.se\//);
  });

  it("should get shortened url with cya.se", async () => {
    const response = await minify(url, { provider: "cya" });
    expect(response.shortUrl).toMatch(/^https:\/\/cya.se\//);
  });

  it("should get shortened url with tinyurl.com", async () => {
    const response = await minify(url, { provider: "tinyurl" });
    expect(response.shortUrl).toMatch(/^https:\/\/tinyurl\.com\//);
  });

  it("should get shortened url with clck.ru", async () => {
    const response = await minify(url, { provider: "clck" });
    expect(response.shortUrl).toMatch(/^https:\/\/clck\.ru\//);
  });

  it("should get shortened url with da.gd", async () => {
    const response = await minify(url, { provider: "dagd" });
    expect(response.shortUrl).toMatch(/^https:\/\/da\.gd\//);
  });

  it("should get shortened url with spoo.me", async () => {
    const response = await minify(url, { provider: "spoo" });
    expect(response.shortUrl).toMatch(/^https:\/\/spoo\.me\//);
  });

  it("should get shortened url with shrtr.top", async () => {
    const response = await minify(url, { provider: "shrtr" });
    expect(response.shortUrl).toMatch(/^https:\/\/shrtr\.top\//);
  });

  it("should get shortened url with zip1.io", async () => {
    const response = await minify(url, { provider: "zip1" });
    expect(response.shortUrl).toMatch(/^https:\/\/zip1\.io\//);
  });

  it("should get shortened url with urlvanish.com", async () => {
    const response = await minify(url, { provider: "urlvanish" });
    expect(response.shortUrl).toMatch(/^https:\/\/urlvanish\.com\//);
  });

  it("should get shortened url with tinysrc.me", async () => {
    const response = await minify(url, { provider: "tinysrc" });
    expect(response.shortUrl).toMatch(/^https:\/\/tinysrc\.me\//);
  });

  it("should get shortened url with a777.lt", async () => {
    const response = await minify(url, { provider: "a777" });
    expect(response.shortUrl).toMatch(/^https:\/\/a777\.lt\//);
  });
});
