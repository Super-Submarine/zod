import { describe, it, expect } from "vitest";
import { normalizeUrl, isValidUrl, extractDomain } from "../src/utils/urlUtils";

describe("urlUtils", () => {
  describe("normalizeUrl", () => {
    it("should keep valid URLs unchanged", () => {
      expect(normalizeUrl("https://example.com")).toBe("https://example.com");
      expect(normalizeUrl("http://example.com")).toBe("http://example.com");
    });

    it("should add https:// to domains", () => {
      expect(normalizeUrl("example.com")).toBe("https://example.com");
      expect(normalizeUrl("google.com")).toBe("https://google.com");
    });

    it("should convert search queries to Google search", () => {
      const result = normalizeUrl("hello world");
      expect(result).toContain("google.com/search");
      expect(result).toContain("hello%20world");
    });
  });

  describe("isValidUrl", () => {
    it("should validate correct URLs", () => {
      expect(isValidUrl("https://example.com")).toBe(true);
      expect(isValidUrl("http://example.com")).toBe(true);
    });

    it("should reject invalid URLs", () => {
      expect(isValidUrl("not a url")).toBe(false);
      expect(isValidUrl("example")).toBe(false);
    });
  });

  describe("extractDomain", () => {
    it("should extract domain from URL", () => {
      expect(extractDomain("https://example.com/path")).toBe("example.com");
      expect(extractDomain("https://www.google.com")).toBe("www.google.com");
    });

    it("should return empty string for invalid URLs", () => {
      expect(extractDomain("not a url")).toBe("");
    });
  });
});
