import React from "react";

const UnitTest = () => {
  return (
    <div>
      <h1 className="my-10 text-xl font-bold">
        What is unit test? why we should write unit test?
      </h1>
      <p class="mt-2 ">
        Unit testing is a type of software testing where individual units or
        software components are tested. Its purpose is to validate that each
        unit of code performs as expected. A unit can be anything you want it to
        be — a line of code, a method, or a class.
      </p>

      <ol className="mt-2 ">
        <h1 className="mb-2">There are two types of unit testing:</h1>
        <li>
          <strong>Manual:</strong> As the name implies, unit tests are run
          manually to verify the correctness of your code. This is done before
          writing automated tests. Its drawback is that you have to manually
          test your functions/classes whenever you make changes to them.{" "}
        </li>
        <li>
          <strong>Automated:</strong> This is the preferred unit testing method
          as it can be carried out by simply running a script. Automated tests
          also make it easier to run tests when your application scales.
        </li>
      </ol>
    </div>
  );
};

export default UnitTest;
