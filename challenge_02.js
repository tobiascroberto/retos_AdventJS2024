
function createFrame(names) {
        // Find the longest name length
        // reduce: 
        const maxLength = names.reduce((max, name) => Math.max(max, name.length), 0);
    
        // Calculate the width of the frame
        const frameWidth = maxLength + 2;
    
        // Create the top border
        const topBorder = '*'.repeat(frameWidth + 2);
        
        // Create the names with left alignment within the frame
        const framedNames = names.map(name => `* ${name.padEnd(maxLength)} *`);
        
        // Create the bottom border
        const bottomBorder = '*'.repeat(frameWidth + 2);
        
        // Combine all parts to create the framed output
        const framedOutput = [topBorder, ...framedNames, bottomBorder].join('\n');
        
        return framedOutput;
  }




  console.log(createFrame(['midu', 'madeval', 'educalvolpz']))
  console.log(createFrame(['midu']))
  console.log(createFrame(['a', 'bb', 'ccc']))
  console.log(createFrame(['a', 'bb', 'ccc', 'dddd']))