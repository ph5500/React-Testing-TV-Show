import React from "react";
import { render, queryAllByTestId } from "@testing-library/react";
import Episodes from "./Episodes";
import { dummyData } from '../dummyData';

test("episodes without data", () => {
    render(<Episodes episodes={[]} />);
});




test("rendering episodes from dummy data", () => {
    const { rerender, queryAllByTestId } = render(<Episodes episodes={[]} />);

    rerender(<Episodes episodes={dummyData._embedded.episodes} />);
    console.log(dummyData._embedded.episodes);
    expect(queryAllByTestId(/episode-list/i)).toHaveLength(26);
});



