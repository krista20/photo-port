import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

//call the cleanup function using the afterEach global function from Jest:
//This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup);

//Then we'll use the describe function to declare the component we're testing, by adding the following code:
describe('About component', () => {
    //renders About test

      // First Test
        // it function --> 1st arguement is a string that declares what's being tested
            //--> 2nd areguement callback function runs the test
                // use render function to render the About compenent using JSX
                // it --> can also say test instead to create a test(same use)
      it('renders', () => {
        render(<About />);
      });

      // Second Test(inside describe callback function's body, beneath render test)
      it('matches snapshot DOM node structure', () => {
        // render About
            // using asFragment function -->returns a snapshot of the About component
        const { asFragment } = render(<About />);
            // using expect function w/ a matcher to assert something about a value (using toMatchSnapshot matcher to assert the snapshots will match)
        expect(asFragment()).toMatchSnapshot();
      });
  })