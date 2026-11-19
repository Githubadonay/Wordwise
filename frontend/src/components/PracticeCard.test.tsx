import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import PracticeCard from "./PracticeCard";

describe("PracticeCard", () => {
  it("allows the user to type a sentence", async () => {
    const user = userEvent.setup();
    const onSentenceChange = vi.fn();

    render(
      <PracticeCard
        word="épanoui"
        language="French"
        sentence=""
        practiceStatus={null}
        onSentenceChange={onSentenceChange}
        onSubmit={vi.fn()}
      />,
    );

    const textbox = screen.getByRole("textbox");

    await user.type(textbox, "Je suis heureux.");

    expect(onSentenceChange).toHaveBeenCalled();
  });

  it("disables the submit button when the sentence is empty", () => {
    render(
      <PracticeCard
        word="épanoui"
        language="French"
        sentence=""
        practiceStatus={null}
        onSentenceChange={() => {}}
        onSubmit={vi.fn()}
      />,
    );

    expect(
      screen.getByRole("button", { name: "Check my sentence" }),
    ).toBeDisabled();
  });

  it("calls onSubmit when the submit button is clicked", async () => {
    const user = userEvent.setup();
    const onSubmit = vi.fn();

    render(
      <PracticeCard
        word="épanoui"
        language="French"
        sentence="Je suis épanoui."
        practiceStatus={null}
        onSentenceChange={() => {}}
        onSubmit={onSubmit}
      />,
    );

    await user.click(
      screen.getByRole("button", {
        name: "Check my sentence",
      }),
    );

    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
