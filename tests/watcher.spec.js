import Watcher from '../src/Watcher';
import './wait-for-update';

describe('test', () => {
  it('should equal', (done) => {
    const data = {
      a: 1,
        b: {
        c: 2,
          d: 4
      },
      c: 'c',
        msg: 'yo'
    };

    const cb = jest.fn;

    const watcher = new Watcher(data, 'b.c', cb, { sync: true });
    // expect(watcher.value).toBe(2)

    data.b.c = 3

    // test sync
    // expect(watcher.value).toBe(3)
    // expect(cb).toHaveBeenCalledWith(3, 2)

    data.b = { c: 4 } // swapping the object

    // expect(watcher.value).toBe(4)
    // expect(cb).toHaveBeenCalledWith(4, 3)

    waitForUpdate(() => {
      console.log('1');
    }).then(() => {
      console.log('2');
      expect(1).toBe(2);
    }).then(done);
  });
});
