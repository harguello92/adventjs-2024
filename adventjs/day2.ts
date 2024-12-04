/*
Santa Claus 🎅 wants to frame the names of the good children to decorate his workshop 🖼️, but the frame must follow specific rules. Your task is to help the elves generate this magical frame.

Rules:

Given an array of names, you must create a rectangular frame that contains all of them.
Each name must be on a line, aligned to the left.
The frame is built with * and has a border one line thick.
The width of the frame automatically adapts to the longest name plus a margin of 1 space on each side.
Example of how it works:

createFrame(['midu', 'madeval', 'educalvolpz'])

// Expected result:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Expected result:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Expected result:
*******
* a   *
* bb  *
* ccc *
*******

*/

function createFrame(names: string[]): string {
  const snapshotNames = [...names];
  const orderedNames = snapshotNames.sort((a, b) => b.length - a.length)[0]
  const frameWidth = orderedNames.length;
  const border = "*".repeat(frameWidth + 4);
  let layout = '';

  layout += border + "\n";

  for (const name of names) {
    const offset = Math.abs(name.length - frameWidth) + 1;
    layout += `* ${name}${" ".repeat(offset)}*\n`
  }

  layout += border;

  return layout;
}
