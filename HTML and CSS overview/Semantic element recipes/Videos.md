# Videos

> [!cite] Citation
> 
> - [video element (HTML specs)](https://html.spec.whatwg.org/multipage/media.html#the-video-element)
> - [A complete list of MIME types (iana)](https://www.iana.org/assignments/media-types/media-types.xhtml#video)

## Common practices

### Adding poster frame

A poster frame is an image which is displayed while the video is not available.

### Adding tracks

Note that only `.vtt` files may be used in a track element.

**Subtitles**

Subtitles are for the users who do not speak the language of the video.

**Captions**

Captions are for the users who are deaf.

**Textual descriptions**

Textual descriptions are for the users who are blind.

### Adding multiple video sources

Multiple video sources should be used and they should have different extensions to maximize compatibility.

### Adding alternative text

An alternative text should be in used in a `video` element in cases that a `video` element is unsupported.
Ideally, the alternative text should include the URL to download the video media.

## Recipes

### Complete video element

A video should have a poster frame, controls, tracks, and multiple video sources with different media types.

Additionally, an alternative text in case the browser does not support `video` tag.

```html
<video controls poster="address/to/poster.webm">
	<source src="address/to/video.mp4" type="video/mp4">
	<source src="address/to/video.ogg" type="video/ogg">
	<source src="address/to/video.webm" type="video/webm">
	<track kind="subtitle" src="address/to/subtitle_en.vtt" srclang="en"/>
	<track kind="caption" src="address/to/caption_en.vtt" srclang="en"/>
	<track kind="description" src="address/to/description_en.vtt" srclang="en"/>
		<p>Your brower does not support video, but you can download it from <a src="address/to/video" srclang="en">our download page</a>.</p>
</video>
```
