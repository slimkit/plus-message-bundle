import PlusMessageBundle from './index';

test('Test message: { message: "This is a message." }', () => {

  const message = { message: 'This is a message.' };

  expect(
    PlusMessageBundle(message).getMesaage()
  ).toBe(
    message.message
  );

});

test('Test message: { message: [ "This is a array message item." ] }', () => {

  const message = 'This is a array message item.';
  const data = { message: [ message ] };

  expect(PlusMessageBundle(data).getMesaage()).toBe(message);

});

test('Test message: { key1: "This is a object message." }', () => {

  const input = 'key1';
  const message = 'This is a object message.';
  const Messageable = PlusMessageBundle({
    [input]: message
  });

  expect(Messageable.getMesaage()).toBe(message);
  expect(Messageable.getInputKey()).toBe(input);

});

test('Test message: { key1: [ "This is a object message array item." ] }', () => {

  const input = 'key1';
  const message = 'This is a object message array item.';
  const Messageable = PlusMessageBundle({
    [input]: message
  });

  expect(Messageable.getMesaage()).toBe(message);
  expect(Messageable.getInputKey()).toBe(input);

});

test(
`Test message: 
    {
      "message": "This is a message.",
      "errors": {
        "key1": [ "This is a error message item." ]
      }
    }
`,
() => {

  const input = 'key1';
  const message = 'This is a error message item.';
  const Messageable = PlusMessageBundle({
    message: 'This is a message.',
    errors: {
      [input]: [ message ]
    }
  });

  expect(Messageable.getMesaage()).toBe(message);
  expect(Messageable.getInputKey()).toBe(input);

});

test(
`Test message: 
    {
      "message": "This is a message.",
      "errors": {
        "key1": "This is a error message."
      }
    }
`,
() => {

  const input = 'key1';
  const message = 'This is a error message.';
  const Messageable = PlusMessageBundle({
    message: 'This is a message.',
    errors: {
      [input]: message
    }
  });

  expect(Messageable.getMesaage()).toBe(message);
  expect(Messageable.getInputKey()).toBe(input);

});
