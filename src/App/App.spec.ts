import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Renders main page correctly", () => {
    it("Should render the page correctly", () => {
        render(App());
        const h1 = screen.queryByText("Welcome. Tikube a YouTube Clone - Martin Alemajoh");
        expect(h1).toBeInTheDocument()
    });
});