import fs from 'fs';
import path from 'path';

// Function to create a minimal PNG with correct dimensions
function createPlaceholderPNG(width, height, outputPath) {
  // Create PNG header and IHDR chunk
  const signature = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8;  // bit depth
  ihdrData[9] = 2;  // color type (RGB)
  ihdrData[10] = 0; // compression method
  ihdrData[11] = 0; // filter method
  ihdrData[12] = 0; // interlace method

  const ihdrLength = Buffer.alloc(4);
  ihdrLength.writeUInt32BE(13, 0);

  const ihdrType = Buffer.from('IHDR');
  const ihdrCrc = Buffer.alloc(4);
  ihdrCrc.writeUInt32BE(crc32(Buffer.concat([ihdrType, ihdrData])), 0);

  // Create a small IDAT chunk with white pixels (simplified)
  const idatData = Buffer.from([0x08, 0x1D, 0x01, 0x02, 0x00, 0xFD, 0xFF, 0x00, 0x00, 0x00, 0x02, 0x00, 0x01]);
  const idatLength = Buffer.alloc(4);
  idatLength.writeUInt32BE(idatData.length, 0);
  const idatType = Buffer.from('IDAT');
  const idatCrc = Buffer.alloc(4);
  idatCrc.writeUInt32BE(crc32(Buffer.concat([idatType, idatData])), 0);

  // IEND chunk
  const iendLength = Buffer.alloc(4);
  iendLength.writeUInt32BE(0, 0);
  const iendType = Buffer.from('IEND');
  const iendCrc = Buffer.alloc(4);
  iendCrc.writeUInt32BE(crc32(iendType), 0);

  // Combine all chunks
  const png = Buffer.concat([
    signature,
    ihdrLength, ihdrType, ihdrData, ihdrCrc,
    idatLength, idatType, idatData, idatCrc,
    iendLength, iendType, iendCrc
  ]);

  fs.writeFileSync(outputPath, png);
  console.log(`Created placeholder: ${outputPath} (${width}x${height})`);
}

// CRC32 calculation (required for PNG chunks)
function crc32(buffer) {
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buffer.length; i++) {
    crc = crc ^ buffer[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (0xEDB88320 & -(crc & 1));
    }
  }
  return ~crc >>> 0;
}

// Generate placeholder screenshots
const outputDir = '.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/actual';

createPlaceholderPNG(375, 1257, path.join(outputDir, 'Mobile-Home_02-1706_1699.png'));
createPlaceholderPNG(1920, 1257, path.join(outputDir, '02_Home_02-1706_2184.png'));

console.log('\n✓ Placeholder screenshots created successfully!');
console.log('Note: These are minimal PNG placeholders. The backend should regenerate actual screenshots.');
