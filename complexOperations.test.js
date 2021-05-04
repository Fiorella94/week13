import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('first test for checkEmail', () => {
      expect(complexOperations.checkEmail('')).toBe('The email should be an string')
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