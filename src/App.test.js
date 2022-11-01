import { render, screen } from '@testing-library/react';
import App from './App';

const {showResult, workWithNull, workWithArray, filterArray, groupBy} = require('./App')

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('Sum funciton', ()=>{
  test('sum should return the sum of two numbers', ()=>{
    expect(showResult(1,3)).toBe(4)
    expect(showResult(1,3)).toEqual(4)
    expect(showResult(3,4)).toBeGreaterThan(6)
  })
  test("test sum of two float numbers", ()=>{
    expect(showResult(0.1,0.2)).toBeCloseTo(0.3)
  })
})

describe('work with null', ()=>{
  test('tests', ()=>{
    expect(workWithNull()).toBe(null)
    expect(workWithNull()).toBeNull()
    expect(workWithNull()).toBeFalsy()
    expect(workWithNull()).toBeDefined()
    expect(workWithNull()).not.toBeUndefined()
    expect(workWithNull()).not.toBeTruthy()
  })
})

describe('work with arrays', ()=>{
  let arr
  beforeEach(()=>{
    arr = [1, null, "1", 0, undefined, 0.1, true, false]
  })
  test('return same array', ()=>{
    // const arr = [1, null, "1", 0, undefined, 0.1, true, false]
    expect(workWithArray(arr)).toBe(arr)
  })
  test('filter array from false values', ()=>{
    // const arr = [1, null, "1", 0, undefined, 0.1, "", true, false]
    const arrResult = [1, "1", 0.1, true]
    expect(filterArray(arr)).toEqual(arrResult)
  })
  test('test array with NOT contain elements', ()=>{
    // const arr = [1, null, "1", 0, undefined, 0.1, "", true, false]
    const arrRes = [null, undefined, false, 0, ""]
    expect(filterArray(arr)).not.toContain(arrRes)
  })
})

describe("groupBy tests", ()=>{
  test("Math.floor",()=>{
    const arr = [2.1, 2.2, 4.9, 5.0]
    const res = {
      2: [2.1, 2.2],
      4: [4.9],
      5: [5.0]
    }
    expect(groupBy(arr, Math.floor)).toEqual(res)

  })
  test('string length', ()=>{
    const arr = ["one", "two", "three"]
    const res = {
      3: ["one", "two"],
      5: ["three"]
    }
    expect(groupBy(arr, "length")).toEqual(res)

  })
})


