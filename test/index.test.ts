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

it("should get shortened url with hideuri.com", async () => {
const response = await minify(url, { provider: "hideuri" });
expect(response.shortUrl).toMatch(/^https:\/\/hideuri.com\//);
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
});
