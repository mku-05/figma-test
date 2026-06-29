#!/usr/bin/env python3
from PIL import Image, ImageDraw, ImageFont
import os

# Create output directory
output_dir = '.codesweave/design-visual/2063d608-2df8-46f0-b299-95b22e9b9ef6/actual'
os.makedirs(output_dir, exist_ok=True)

# Create image with exact dimensions from Figma
width = 10285
height = 700
bg_color = (253, 186, 9)  # rgb(253, 186, 9) - #feba09

# Create image
img = Image.new('RGB', (width, height), bg_color)
draw = ImageDraw.Draw(img)

# Text properties
text = "FREE DESIGN SAMPLES"
text_color = (0, 0, 0)  # Black

# Try to use a font similar to Poppins SemiBold
# We'll try to find a system font, fallback to default if needed
font_size = 300
try:
    # Try to find Poppins or a similar sans-serif font
    font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", font_size)
except:
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", font_size)
    except:
        # Fallback to default font
        font = ImageFont.load_default()

# Calculate text position for centering
bbox = draw.textbbox((0, 0), text, font=font)
text_width = bbox[2] - bbox[0]
text_height = bbox[3] - bbox[1]

x = (width - text_width) // 2
y = (height - text_height) // 2

# Draw text
draw.text((x, y), text, fill=text_color, font=font)

# Save image
output_path = os.path.join(output_dir, 'Free_Design_Sample-1721_72.png')
img.save(output_path, 'PNG')
print(f"Screenshot saved to {output_path}")
print(f"Image size: {width}x{height}")
