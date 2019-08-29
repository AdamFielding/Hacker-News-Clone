import * as api from "./api";

describe("getDomainFromUrl", () => {
  it("should trim the path and return the domain", () => {
    expect(api.getDomainFromUrl("https://test.com/what")).toBe("test.com");
  });

  it("should trim query strings", () => {
    expect(
      api.getDomainFromUrl("https://another-test.com/what?query=true")
    ).toBe("another-test.com");
  });

  it("should return an empty string if the url is not valid", () => {
    expect(api.getDomainFromUrl("This for sure is not a url")).toBe("");
  });

  it("should return an empty string if the input is not a string", () => {
    expect(api.getDomainFromUrl(undefined)).toBe("");
    expect(api.getDomainFromUrl(null)).toBe("");
    expect(api.getDomainFromUrl(10)).toBe("");
    expect(api.getDomainFromUrl({ test: "test" })).toBe("");
    expect(api.getDomainFromUrl([])).toBe("");
  });
});
