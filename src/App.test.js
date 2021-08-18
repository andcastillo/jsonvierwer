import { render, screen, act } from '@testing-library/react';
import ReactTestUtils from 'react-dom/test-utils'; // ES6

import ReactDOM from 'react-dom';
import App from './App';
let container;

console.error = (a) => { };

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  jest.spyOn(console, 'warn').mockImplementation(() => { });
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test("renders Body", async () => {
  let linkElement = {};
  render(<App />, container);
  await sleep(2000);
  linkElement = screen.getByText(/Based on the Stanford Dogs Dataset/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders PageControls working", async () => {
  let linkElement = {};
  render(<App />, container);
  await sleep(2000);
  const button = document.getElementById("nextbutton");
  ReactTestUtils.Simulate.click(button);
  await sleep(500);
  linkElement = screen.getByText("https://github.com/AniList/ApiV2-GraphQL-Docs");
  expect(linkElement).toBeInTheDocument();
});

