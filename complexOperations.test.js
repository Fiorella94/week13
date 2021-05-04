import 'jest';
import * as complexOperations from './complexOperations';
import * as basicOperations from './basicOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('first test for checkEmail', () => {
      expect(complexOperations.checkEmail('')).toBe('The email should be a string')
       }) 
    it('second test for checkEmail', () => {
      expect(complexOperations.checkEmail('fiorella')).toBe('The email is invalid')
    })
    it('third test for checkEmail', () => {
      expect(complexOperations.checkEmail('fiorella1994@')).toBe('The email is invalid')
    })
    it('fourth test for checkEmail', () => {
      expect(complexOperations.checkEmail('fiorella1994@hotmail')).toBe('The email is invalid')
    })
    it('fifth test for checkEmail' , () => {
      expect(complexOperations.checkEmail('fiorella1994@hotmail.com')).toBe('The email is valid')
    })
    it('sixth test for checkEmail' , () => {
      expect(complexOperations.checkEmail('fiorella1994@gmail.com')).toBe('The email is valid')
    })
    });
  });

  describe('calculateArea', () => {
    it('first test for calculateArea', () => {
       expect(complexOperations.calculateArea('triangle', 5, 2)).toBe(5);
    });
    it('second test for calculateArea' , () => {
      expect(complexOperations.calculateArea('triangle' ,5 ,2)).not.toBe(10);
    })
    it('thrid test for calculateArea' ,() => {
      expect(complexOperations.calculateArea('triangle',5,2)).toBeGreaterThanOrEqual(5)
    })
    it('fourth test for calculateArea' , () => {
      expect(complexOperations.calculateArea('rectangle' ,7,2) <20).toBeTruthy()
    })
    });

 describe('sumGratherThan', () => {
    it('first test for sumGratherThan', () => {
        expect(complexOperations.sumGratherThan('', '')).toBe('The params should be numbers');
    });
    it('second test for sumGratherThan' , () => {
      expect(complexOperations.sumGratherThan('Z','Y','W')).toBe('The params should be numbers')
    });
    it('third test for sumGratherThan', () => {
      expect(complexOperations.sumGratherThan(5,3,9)).toBe('8 is less than 9')
    })
    it('fourth test for sumGratherThan' , () => {
      expect(complexOperations.sumGratherThan(5,10,12)).toBe('15 is grather than 12')
    })
    });
  

  describe('intersectionBetweenArrays', () => {
    it('first test for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays([1, 1, 2])).toBe('The params should be arrays');
    });
    it('first test for intersectionBetweenArrays', () => {
      expect(complexOperations.intersectionBetweenArrays(['one','two','three'])).toBe('The params should be arrays')
    })
    });
  

  describe('sortArrayOfObjectsByKey', () => {
    it('first test for sortArrayOfObjectsByKey', () => {
      expect(
        complexOperations.sortArrayOfObjectsByKey(
            [{ color: 'Blue' }, { color: 'Pink' }, { color: 'Black' }],
            'color'
        )
    ).toEqual([{ color: 'Black' }, { color: 'Blue' }, { color: 'Pink' }]);
});
it('second test for sortArrayOfObjectsByKey', () => {
  expect(complexOperations.sortArrayOfObjectsByKey(undefined, 'age')).toBe(
    'The first param should be an array'
  )
})

    });
  

  describe('numberOfOddAndEvenNumbers', () => {
    it('first test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers('')).toBe( 'The param should be an array')
    });
    it('second test for numberOfOddAndEvenNumbers', () => {
      expect(complexOperations.numberOfOddAndEvenNumbers([2,1,3,5,6,10])).toStrictEqual({even: 3, odd: 3})
    })
  });
  //mocked tests//
  describe('checkEmail function mocked', () => {
    beforeEach(() => {
      jest.restoreAllMocks()
    })
    it("email isn't a string", () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(false)
      expect(complexOperations.checkEmail('mock')).toBe(
        'The email should be an string'
      )
    })
    it("email value hasn't got correct form", () => {
      jest.spyOn(basicOperations, 'validateEmail').mockReturnValue(null)
      expect(complexOperations.checkEmail('mock')).toBe('The email is invalid')
    })
    it('email value is valid email', () => {
      jest
        .spyOn(basicOperations, 'validateEmail')
        .mockReturnValue('mockedMail@hotmail.com')
      expect(complexOperations.checkEmail('mock')).toBe('The email is valid')
    })
  })
  
  describe('calculateArea function mocked', () => {
    beforeEach(() => {
      jest.restoreAllMocks()
    })
    it(' multiplication in square figure', () => {
      jest.spyOn(basicOperations, 'multip').mockReturnValue(6)
      expect(complexOperations.calculateArea('square', 0, 0)).toBe(6)
    })
    it(' multiplication in rectangle figure', () => {
      jest.spyOn(basicOperations, 'multip').mockReturnValue(9)
      expect(complexOperations.calculateArea('rectangle', 0, 0)).toBe(9)
    })
    it(' division in triangle figure', () => {
      jest.spyOn(basicOperations, 'division').mockReturnValue(16.8)
      expect(complexOperations.calculateArea('triangle', 0, 0)).toBeCloseTo(16.8)
    })
    it('exponent in circle figure', () => {
      jest.spyOn(basicOperations, 'exponent').mockReturnValue(6)
      expect(complexOperations.calculateArea('circle', 0, 0)).toBeCloseTo(
        18.84,
        0.5
      )
    })
    it('default figure error test', () => {
      jest.spyOn(basicOperations, 'isSupportedFigure').mockReturnValue('default')
      expect(complexOperations.calculateArea('default', 0, 0)).toBe(
        'default is not supported'
      )
    })
  })
  
  describe('sumGreaterThan function mocked', () => {
    beforeEach(() => {
      jest.restoreAllMocks()
    })
    it('function isNumber is false', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false)
      expect(complexOperations.sumGratherThan(0, 0, 0)).toBe(
        'The params should be numbers'
      )
    })
    it('return of sum is 13  and then is greater than 10', () => {
      jest.spyOn(basicOperations, 'sum').mockReturnValue('13')
      expect(complexOperations.sumGratherThan(0, 0, 10)).toBe(
        '13 is grather than 10'
      )
    })
    it('return of sum is 9 and then is less than 16', () => {
      jest.spyOn(basicOperations, 'sum').mockReturnValue('9')
      expect(complexOperations.sumGratherThan(0, 0, 16)).toBe('9 is less than 16')
    })
  })
  
  describe('intersectionBetweenArrays function mocked', () => {
    beforeEach(() => {
      jest.restoreAllMocks()
    })
    it("testing with other value that's not an array", () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(null)
      expect(complexOperations.intersectionBetweenArrays('mock')).toBe(
        'The params should be arrays'
      )
    })
    it('testing with undefined instead of array', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(undefined)
      expect(complexOperations.intersectionBetweenArrays('mock')).toBe(
        'The params should be arrays'
      )
    })
    it('match arrays', () => {
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([1, 3, 5])
      expect(
        complexOperations.intersectionBetweenArrays(['mock'], ['mock'])
      ).toStrictEqual([1, 3, 5])
    })
    it('no matching elements in arrays', () => {
      jest.spyOn(basicOperations, 'arrayIntersection').mockReturnValue([])
      expect(
        complexOperations.intersectionBetweenArrays(
          ['Rosario', 'San Lorenzo', 'San Nicolas'],
          ['Peru', 'Bolivia', 'Mexico']
        )
      ).toEqual('There are not matching elements')
    })
  })
  
  describe('sortArrayOfObjectsByKey function mocked', () => {
    beforeEach(() => {
      jest.restoreAllMocks()
    })
    it('first param is not an array', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(null)
      expect(complexOperations.sortArrayOfObjectsByKey([], 'name')).toBe(
        'The first param should be an array'
      )
    })
    it('second param is not an array', () => {
      jest.spyOn(basicOperations, 'isString').mockReturnValue(null)
      expect(complexOperations.sortArrayOfObjectsByKey([], 'name')).toBe(
        'The second param should be an string'
      )
    })
    it('sorting arrays by key', () => {
      jest
        .spyOn(basicOperations, 'sortArrayByKey')
        .mockReturnValue(
          [
            { vaccine: 'sputnik V' },
            { vaccine: 'astrazeneca' },
            { vaccine: 'sinovac' }
          ],
          'vaccine'
        )
      expect(
        complexOperations.sortArrayOfObjectsByKey([], 'noname')
      ).toStrictEqual(
        [
          { vaccine: 'sputnik V' },
          { vaccine: 'astrazeneca' },
          { vaccine: 'sinovac' }
        ],
        'vaccine'
      )
    })
    it('Array with incorrect key', () => {
      jest
        .spyOn(basicOperations, 'arrayElementsAreObjectWithKey')
        .mockReturnValue(undefined)
      expect(complexOperations.sortArrayOfObjectsByKey([], 'vaccine')).toBe(
        'Some elements in the array does not have the vaccine property'
      )
    })
    it('nothing to sort', () => {
      jest.spyOn(basicOperations, 'sortArrayByKey').mockReturnValue(0)
      expect(complexOperations.sortArrayOfObjectsByKey([], 'noname')).toBe(0)
    })
  })
  
  describe('numberOfOddAndEvenNumbers function mocked', () => {
    beforeEach(() => {
      jest.restoreAllMocks()
    })
    it('param is not an array', () => {
      jest.spyOn(basicOperations, 'isArray').mockReturnValue(false)
      expect(complexOperations.numberOfOddAndEvenNumbers([])).toBe(
        'The param should be an array'
      )
    })
    it(' param of array is not a number', () => {
      jest.spyOn(basicOperations, 'isNumber').mockReturnValue(false)
      expect(complexOperations.numberOfOddAndEvenNumbers([2, 3])).toBe(
        'The array should have only numbers'
      )
    })
    it('two odds number in the array', () => {
      jest
        .spyOn(basicOperations, 'getOddNumbersFromArray')
        .mockReturnValue([31, 157])
      expect(complexOperations.numberOfOddAndEvenNumbers([])).toEqual({
        odd: 2,
        even: 0
      })
    })
    it('two even number in the array', () => {
      jest
        .spyOn(basicOperations, 'getEvenNumbersFromArray')
        .mockReturnValue([10, 4])
      expect(complexOperations.numberOfOddAndEvenNumbers([])).toEqual({
        odd: 0,
        even: 2
      })
    })
  })