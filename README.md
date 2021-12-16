# Global Github Actions

Here be dragons.

https://github.com/actions/toolkit/blob/master/README.md

🐉

## sanitize-text
This action returns a sanitized text
### inputs
- text: **(Required)** Text to sanitize

### outputs
- sanitized_text: Clean version of the text

### Example usage
```yaml
- id: sanitize-text
  uses: condenast/actions/sanitize-text@v1
  with:
    text: //I'M " ` unsanitized .,-/
- name: build docker image
  run: docker build -t image:${{ steps.sanitize-text.outputs.sanitized_text }} .
```
