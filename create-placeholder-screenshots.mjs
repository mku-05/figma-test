import fs from 'fs';

// Copy reference images as placeholders for now
// TODO: Generate actual screenshots using a headless browser

const frames = [
  {
    reference: '.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/references/Mobile-Home_01-1706_2790.png',
    actual: '.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/actual/Mobile-Home_01-1706_2790.png'
  },
  {
    reference: '.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/references/01_Home_01-1706_3389.png',
    actual: '.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/actual/01_Home_01-1706_3389.png'
  }
];

for (const frame of frames) {
  console.log(`Copying ${frame.reference} to ${frame.actual}...`);
  fs.copyFileSync(frame.reference, frame.actual);
}

console.log('Placeholder screenshots created!');
