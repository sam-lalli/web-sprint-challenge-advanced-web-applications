import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import Bubbles from './Bubbles'
import { fetchColors as mockFetchColors } from '../api/fetchColors'
import ColorList from "./ColorList";
jest.mock('../api/fetchColors')

const colorData = [
  {
    color: "aliceblue",
    code: {
      hex: "#f0f8ff"
    },
    id: 1
  },
  {
    color: "limegreen",
    code: {
      hex: "#99ddbc"
    },
    id: 2
  },
  {
    color: "aqua",
    code: {
      hex: "#00ffff"
    },
    id: 3
  }]

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce(colorData);
  render(<Bubbles colors={colorData}/>);
  await waitFor(async ()=>{
    expect(await screen.findByText(/bubbles/i)).toBeInTheDocument()
  })
});
