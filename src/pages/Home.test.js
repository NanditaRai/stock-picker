import { render, screen, fireEvent } from '@testing-library/react';
import Home from './Home';
import userEvent from '@testing-library/user-event';
import { StockContext } from '../context/StockContext';
import { stockArray } from '../network/mockedData'

test('test search screen rendering', () => {
  render(
    <StockContext.Provider value={{stocks: stockArray, addStocks: jest.fn(), selectStock: jest.fn(), selectedStock: {}, selectNextStock: jest.fn() , selectPreviousStock: jest.fn()}}>
      <Home />
    </StockContext.Provider>
  );

  const searchButton = screen.getByText(/Search/i);
  expect(searchButton).toBeInTheDocument();

  const prevButton = screen.getByText(/Prev/i);
  expect(prevButton).toBeInTheDocument();

  const nextButton = screen.getByText(/Next/i);
  expect(nextButton).toBeInTheDocument();

  const input = screen.getByTestId("search-input")
  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("placeholder", "Type your text here...");
  
});

test('test details screen rendering', () => {
  render(
    <StockContext.Provider value={{stocks: stockArray, addStocks: jest.fn(), selectStock: jest.fn(), selectedStock: {}, selectNextStock: jest.fn() , selectPreviousStock: jest.fn()}}>
      <Home />
    </StockContext.Provider>
  );
  
  const nameElement = screen.getByTestId("details-name")
  expect(nameElement).toBeInTheDocument()
  expect(nameElement).toHaveTextContent('Name:')
  
});

test('test search input', async() => {
  const selectStock = jest.fn();
  render(
    <StockContext.Provider value={{stocks: stockArray, addStocks: jest.fn(), selectStock, selectedStock: {}, selectNextStock: jest.fn() , selectPreviousStock: jest.fn()}}>
      <Home />
    </StockContext.Provider>
    );

  const inputElement = screen.getByTestId("search-input")
  userEvent.type(inputElement, "TCS");
  expect(inputElement).toHaveValue("TCS");


  const searchButton = screen.getByText(/Search/i);
  fireEvent.click(searchButton)
  expect(selectStock).toBeCalledTimes(1)
  
});


test('test data in details screen', async() => {
  const selectedStock = stockArray[0];
  render(
    <StockContext.Provider value={{stocks: stockArray, addStocks: jest.fn(), selectStock: jest.fn(), selectedStock, selectNextStock: jest.fn() , selectPreviousStock: jest.fn()}}>
      <Home />
    </StockContext.Provider>
    );

  const nameElement = screen.getByTestId("details-name")
  expect(nameElement).toBeInTheDocument()
  expect(nameElement).toHaveTextContent('Name: International Business Machines Corporation')
});
