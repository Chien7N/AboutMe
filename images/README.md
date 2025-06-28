# Images Directory

This directory contains all the images for your personal website.

## File Structure

- `profile_photo.jpg` - Your profile photo (recommended size: 400x400px)
- `hobbies/` - Directory for hobby and travel photos
  - `japan.jpg` - Photo from Japan trip
  - `italy.jpg` - Photo from Italy trip
  - `newzealand.jpg` - Photo from New Zealand trip

## Image Guidelines

- Use JPG or PNG format
- Optimize images for web (compress them)
- Recommended sizes:
  - Profile photo: 400x400px
  - Travel photos: 800x600px
  - Hobby photos: 600x400px

## How to Add Images

1. Place your images in the appropriate directory
2. Update the corresponding JSON files in `/content/` to reference the new images
3. The website will automatically display the new images

## Example

To add a new travel photo:
1. Save the image as `public/images/hobbies/paris.jpg`
2. Update `content/more/interests.json` to include the new travel entry with the image path 