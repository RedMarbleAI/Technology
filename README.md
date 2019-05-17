# Technology

1. Microsoft Bot Framework Image Reduction 

Microsoft Bot Framework is a platform to build chat bots. When a user sends an image to a bot built on Bot Framework, the limit of image size is 4 MB. However, a photo taken by mobile phone frequently takes a size larger than 4 MB. 

Without asking users to compress photos when using a bot, Red Marble AI proposes to make front-end modifications to address this challenge. The code first checks the media type (formerly MIME type) from the extension and then resizes images. The proposed solution uses JS with ES6 with the additional files for handling tasks such as parsing extensions and mime types imported as ES6 modules. This solution does not require any back-end changes.
